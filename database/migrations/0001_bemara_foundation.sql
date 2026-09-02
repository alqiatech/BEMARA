create extension if not exists "pgcrypto";
create extension if not exists "vector";

create schema if not exists bemara;

create type bemara.data_sensitivity as enum ('standard', 'personal', 'sensitive', 'restricted');
create type bemara.data_origin as enum ('manual', 'conversation', 'device', 'document', 'integration', 'system');
create type bemara.consent_state as enum ('granted', 'denied', 'revoked', 'not_asked');
create type bemara.memory_kind as enum ('working', 'personal', 'structured', 'episodic', 'preference', 'sensitive');
create type bemara.notification_kind as enum (
  'reminder',
  'insight',
  'conversation_invitation',
  'action_proposal',
  'safety_intervention'
);
create type bemara.notification_priority as enum (
  'critical',
  'important',
  'contextual',
  'gentle',
  'digest_only'
);
create type bemara.entitlement_plan as enum ('free', 'personal', 'intelligence');

create or replace function bemara.current_user_is_operator()
returns boolean
language sql
stable
as $$
  select coalesce(
    auth.jwt() -> 'app_metadata' ->> 'bemara_role' in ('owner', 'operator', 'safety'),
    false
  );
$$;

create table bemara.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  locale text not null default 'es-MX',
  bilingual_mode boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint profiles_locale_check check (locale in ('es-MX', 'en-US'))
);

create table bemara.consents (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  scope text not null,
  state bemara.consent_state not null default 'not_asked',
  purpose text not null,
  legal_basis text not null,
  sensitive boolean not null default false,
  source text not null,
  granted_at timestamptz,
  revoked_at timestamptz,
  created_at timestamptz not null default now()
);

create table bemara.audit_logs (
  id uuid primary key default gen_random_uuid(),
  actor_user_id uuid references auth.users(id) on delete set null,
  target_user_id uuid references auth.users(id) on delete set null,
  action text not null,
  sensitivity bemara.data_sensitivity not null default 'personal',
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create table bemara.life_entities (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  type text not null,
  title text not null,
  sensitivity bemara.data_sensitivity not null default 'personal',
  origin bemara.data_origin not null,
  occurred_at timestamptz,
  source_entity_id uuid,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table bemara.life_relationships (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  from_entity_id uuid not null references bemara.life_entities(id) on delete cascade,
  to_entity_id uuid not null references bemara.life_entities(id) on delete cascade,
  relationship_type text not null,
  confidence text not null default 'declared',
  valid_from timestamptz,
  valid_to timestamptz,
  created_at timestamptz not null default now(),
  constraint life_relationships_confidence_check check (confidence in ('declared', 'derived', 'inferred'))
);

create table bemara.memories (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  kind bemara.memory_kind not null,
  content text not null,
  sensitivity bemara.data_sensitivity not null default 'personal',
  source_entity_id uuid references bemara.life_entities(id) on delete set null,
  consent_id uuid references bemara.consents(id) on delete set null,
  forgettable boolean not null default true,
  expires_at timestamptz,
  embedding vector(1536),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table bemara.notifications (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  kind bemara.notification_kind not null,
  priority bemara.notification_priority not null,
  domain text,
  title text not null,
  explanation_signals jsonb not null default '[]'::jsonb,
  offered_action text,
  scheduled_for timestamptz,
  delivered_at timestamptz,
  dismissed_at timestamptz,
  created_at timestamptz not null default now()
);

create table bemara.entitlements (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  plan bemara.entitlement_plan not null,
  feature_code text not null,
  enabled boolean not null default false,
  source text not null,
  starts_at timestamptz not null default now(),
  ends_at timestamptz,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  constraint entitlements_source_check check (
    source in ('manual', 'conekta', 'apple_iap', 'google_play', 'promotion')
  )
);

create table bemara.external_connections (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  provider text not null,
  purpose text not null,
  consent_id uuid references bemara.consents(id) on delete set null,
  enabled boolean not null default false,
  encrypted_token_ref text,
  connected_at timestamptz,
  revoked_at timestamptz,
  created_at timestamptz not null default now()
);

create table bemara.lena_action_proposals (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  title text not null,
  domain text not null,
  autonomy_level text not null,
  requires_human_approval boolean not null default true,
  sensitivity bemara.data_sensitivity not null default 'personal',
  consent_scopes jsonb not null default '[]'::jsonb,
  status text not null default 'prepared',
  approved_at timestamptz,
  executed_at timestamptz,
  created_at timestamptz not null default now(),
  constraint lena_action_autonomy_check check (
    autonomy_level in ('suggest', 'prepare', 'execute_with_rules')
  ),
  constraint lena_action_status_check check (
    status in ('suggested', 'prepared', 'approved', 'executed', 'rejected', 'cancelled')
  )
);

create table bemara.ai_provider_calls (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete set null,
  provider text not null,
  purpose text not null,
  model_alias text,
  input_tokens integer,
  output_tokens integer,
  latency_ms integer,
  cost_minor_units integer,
  redaction_applied boolean not null default true,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create index profiles_locale_idx on bemara.profiles (locale);
create index consents_user_scope_idx on bemara.consents (user_id, scope, state);
create index audit_logs_target_created_idx on bemara.audit_logs (target_user_id, created_at desc);
create index life_entities_user_type_idx on bemara.life_entities (user_id, type, occurred_at desc);
create index life_relationships_user_from_idx on bemara.life_relationships (user_id, from_entity_id);
create index memories_user_kind_idx on bemara.memories (user_id, kind, created_at desc);
create index notifications_user_priority_idx on bemara.notifications (user_id, priority, created_at desc);
create index entitlements_user_feature_idx on bemara.entitlements (user_id, feature_code, enabled);
create index external_connections_user_provider_idx on bemara.external_connections (user_id, provider);
create index lena_actions_user_status_idx on bemara.lena_action_proposals (user_id, status, created_at desc);
create index ai_provider_calls_user_created_idx on bemara.ai_provider_calls (user_id, created_at desc);

alter table bemara.profiles enable row level security;
alter table bemara.consents enable row level security;
alter table bemara.audit_logs enable row level security;
alter table bemara.life_entities enable row level security;
alter table bemara.life_relationships enable row level security;
alter table bemara.memories enable row level security;
alter table bemara.notifications enable row level security;
alter table bemara.entitlements enable row level security;
alter table bemara.external_connections enable row level security;
alter table bemara.lena_action_proposals enable row level security;
alter table bemara.ai_provider_calls enable row level security;

create policy profiles_select_own_or_operator on bemara.profiles
for select using (id = auth.uid() or bemara.current_user_is_operator());

create policy profiles_insert_own on bemara.profiles
for insert with check (id = auth.uid());

create policy profiles_update_own on bemara.profiles
for update using (id = auth.uid()) with check (id = auth.uid());

create policy consents_select_own_or_operator on bemara.consents
for select using (user_id = auth.uid() or bemara.current_user_is_operator());

create policy consents_insert_own on bemara.consents
for insert with check (user_id = auth.uid());

create policy consents_update_own on bemara.consents
for update using (user_id = auth.uid()) with check (user_id = auth.uid());

create policy audit_logs_select_own_or_operator on bemara.audit_logs
for select using (target_user_id = auth.uid() or actor_user_id = auth.uid() or bemara.current_user_is_operator());

create policy audit_logs_insert_operator on bemara.audit_logs
for insert with check (bemara.current_user_is_operator());

create policy life_entities_own_or_operator on bemara.life_entities
for all using (user_id = auth.uid() or bemara.current_user_is_operator())
with check (user_id = auth.uid() or bemara.current_user_is_operator());

create policy life_relationships_own_or_operator on bemara.life_relationships
for all using (user_id = auth.uid() or bemara.current_user_is_operator())
with check (user_id = auth.uid() or bemara.current_user_is_operator());

create policy memories_own_or_operator on bemara.memories
for all using (user_id = auth.uid() or bemara.current_user_is_operator())
with check (user_id = auth.uid() or bemara.current_user_is_operator());

create policy notifications_own_or_operator on bemara.notifications
for all using (user_id = auth.uid() or bemara.current_user_is_operator())
with check (user_id = auth.uid() or bemara.current_user_is_operator());

create policy entitlements_select_own_or_operator on bemara.entitlements
for select using (user_id = auth.uid() or bemara.current_user_is_operator());

create policy entitlements_insert_operator on bemara.entitlements
for insert with check (bemara.current_user_is_operator());

create policy entitlements_update_operator on bemara.entitlements
for update using (bemara.current_user_is_operator()) with check (bemara.current_user_is_operator());

create policy external_connections_own_or_operator on bemara.external_connections
for all using (user_id = auth.uid() or bemara.current_user_is_operator())
with check (user_id = auth.uid() or bemara.current_user_is_operator());

create policy lena_actions_own_or_operator on bemara.lena_action_proposals
for all using (user_id = auth.uid() or bemara.current_user_is_operator())
with check (user_id = auth.uid() or bemara.current_user_is_operator());

create policy ai_provider_calls_select_operator on bemara.ai_provider_calls
for select using (bemara.current_user_is_operator());

create policy ai_provider_calls_insert_operator on bemara.ai_provider_calls
for insert with check (bemara.current_user_is_operator());

comment on schema bemara is 'BEMARA foundation schema: privacy, Life Graph, LENA, notifications, entitlements.';
comment on table bemara.memories is 'Authorized BEMARA memory. Temporary conversations must not create personal memory rows.';
comment on table bemara.ai_provider_calls is 'AI telemetry only. Do not store sensitive prompt or document bodies here.';

