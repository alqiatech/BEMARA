import { z } from "zod";

export const featureFlagDefaults = {
  lena: { enabled: true },
  bilingualMode: { enabled: true },
  notificationIntelligence: { enabled: true },
  executiveLayer: { enabled: true },
  community: { enabled: false },
  clinical: { enabled: false },
} as const;

export const publicEnvSchema = z.object({
  NEXT_PUBLIC_BEMARA_SITE_URL: z.string().url().optional().or(z.literal("")),
  NEXT_PUBLIC_SUPABASE_URL: z.string().url().optional().or(z.literal("")),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().optional(),
  NEXT_PUBLIC_SENTRY_DSN: z.string().optional(),
  NEXT_PUBLIC_POSTHOG_KEY: z.string().optional(),
  NEXT_PUBLIC_POSTHOG_HOST: z.string().url().optional().or(z.literal("")),
});

export const serverEnvSchema = publicEnvSchema.extend({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  PORT: z.coerce.number().int().positive().default(4000),
  BEMARA_API_URL: z.string().url().optional().or(z.literal("")),
  SUPABASE_URL: z.string().url().optional().or(z.literal("")),
  SUPABASE_SERVICE_ROLE_KEY: z.string().optional(),
  SUPABASE_JWT_SECRET: z.string().optional(),
  DATABASE_URL: z.string().optional(),
  AI_PROVIDER_PRIMARY: z.enum(["openai"]).default("openai"),
  AI_PROVIDER_FALLBACK: z.enum(["anthropic"]).default("anthropic"),
  OPENAI_API_KEY: z.string().optional(),
  ANTHROPIC_API_KEY: z.string().optional(),
  AI_GATEWAY_RETENTION_MODE: z.string().optional(),
  RESEND_API_KEY: z.string().optional(),
  RESEND_INBOUND_SIGNING_SECRET: z.string().optional(),
  BEMARA_MAIL_DOMAIN: z.string().default("bemara.me"),
  BEMARA_NOTIFY_DOMAIN: z.string().default("notify.bemara.me"),
  CONEKTA_API_KEY: z.string().optional(),
  APPLE_IAP_SHARED_SECRET: z.string().optional(),
  GOOGLE_PLAY_SERVICE_ACCOUNT_JSON: z.string().optional(),
  PG_BOSS_SCHEMA: z.string().default("pgboss"),
  SENTRY_DSN: z.string().optional(),
  POSTHOG_PROJECT_API_KEY: z.string().optional(),
});

export type PublicEnv = z.infer<typeof publicEnvSchema>;
export type ServerEnv = z.infer<typeof serverEnvSchema>;
export type FeatureFlags = typeof featureFlagDefaults;

export function parseServerEnv(input: NodeJS.ProcessEnv): ServerEnv {
  return serverEnvSchema.parse(input);
}
