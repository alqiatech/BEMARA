export const bemaraBrand = {
  name: "BEMARA",
  slogan: "Toda tú. Con claridad.",
  intelligence: "LENA",
  domain: "bemara.me",
  market: "Mexico",
  locales: ["es-MX", "en-US"],
} as const;

export type OfficialSurfaceId = "mobile" | "personal" | "publicSite" | "operations";
export type SurfaceAudience = "consumer" | "public" | "internal";

export const officialSurfaces = [
  {
    id: "mobile",
    name: "BEMARA Mobile",
    audience: "consumer",
    technology: "React Native + Expo + TypeScript",
  },
  {
    id: "personal",
    name: "BEMARA Personal",
    audience: "consumer",
    technology: "Next.js + React + TypeScript PWA",
  },
  {
    id: "publicSite",
    name: "bemara.me",
    audience: "public",
    technology: "Next.js + TypeScript",
  },
  {
    id: "operations",
    name: "BEMARA Operations",
    audience: "internal",
    technology: "Next.js + TypeScript",
  },
] as const satisfies ReadonlyArray<{
  id: OfficialSurfaceId;
  name: string;
  audience: SurfaceAudience;
  technology: string;
}>;

export type DomainVisibility = "active" | "contextual" | "dormant";

export const lifeDomains = [
  "clarity",
  "bodyHealth",
  "mindEmotions",
  "moneyIndependence",
  "timeMentalLoad",
  "familyCare",
  "relationshipsSexuality",
  "careerGrowth",
  "homeAdministration",
  "styleCare",
  "safetyTravel",
  "goalsProjects",
  "executiveLayer",
  "communityFuture",
] as const;

export type LifeDomainId = (typeof lifeDomains)[number];

export const futureCapabilities = {
  community: {
    enabledByDefault: false,
    reason: "Future contextual community capability, not a launch product surface.",
  },
  clinical: {
    enabledByDefault: false,
    reason: "Future clinical capability; no clinical care, marketplace, or telemedicine in V1.",
  },
} as const;

export type LifeEntityType =
  | "woman"
  | "person"
  | "relationship"
  | "event"
  | "task"
  | "responsibility"
  | "goal"
  | "project"
  | "place"
  | "routine"
  | "document"
  | "account"
  | "financialEvent"
  | "bill"
  | "subscription"
  | "healthObservation"
  | "symptom"
  | "medicationRecord"
  | "studyRecord"
  | "foodEvent"
  | "activity"
  | "sleepEvent"
  | "emotionObservation"
  | "conversationMemory"
  | "preference"
  | "consent"
  | "notification"
  | "externalConnection";

export type DataSensitivity = "standard" | "personal" | "sensitive" | "restricted";
export type DataOrigin =
  "manual" | "conversation" | "device" | "document" | "integration" | "system";

export interface LifeGraphEntity {
  id: string;
  userId: string;
  type: LifeEntityType;
  title: string;
  sensitivity: DataSensitivity;
  origin: DataOrigin;
  occurredAt?: string;
  sourceEntityId?: string;
  metadata: Record<string, unknown>;
  createdAt: string;
  updatedAt: string;
}

export interface LifeGraphRelationship {
  id: string;
  userId: string;
  fromEntityId: string;
  toEntityId: string;
  relationshipType: string;
  confidence: "declared" | "derived" | "inferred";
  validFrom?: string;
  validTo?: string;
  createdAt: string;
}

export type ConsentScope =
  | "identity"
  | "lifeGraph"
  | "memory"
  | "sensitiveMemory"
  | "health"
  | "mentalWellbeing"
  | "finance"
  | "documents"
  | "mail"
  | "calendar"
  | "notifications"
  | "analytics"
  | "aiProcessing"
  | "externalConnection";

export type ConsentState = "granted" | "denied" | "revoked" | "notAsked";

export interface ConsentGrant {
  id: string;
  userId: string;
  scope: ConsentScope;
  state: ConsentState;
  purpose: string;
  legalBasis: string;
  sensitive: boolean;
  grantedAt?: string;
  revokedAt?: string;
  source: "onboarding" | "privacyCenter" | "integration" | "lenaAction" | "operations";
}

export type MemoryKind =
  "working" | "personal" | "structured" | "episodic" | "preference" | "sensitive";

export interface BemaraMemory {
  id: string;
  userId: string;
  kind: MemoryKind;
  content: string;
  sensitivity: DataSensitivity;
  sourceEntityId?: string;
  consentGrantId?: string;
  forgettable: boolean;
  createdAt: string;
  updatedAt: string;
}

export type LenaConversationMode =
  "listen" | "understand" | "perspective" | "decide" | "act" | "temporary";

export type LenaAutonomyLevel = "suggest" | "prepare" | "executeWithRules";

export interface LenaActionProposal {
  id: string;
  userId: string;
  title: string;
  domain: LifeDomainId;
  autonomyLevel: LenaAutonomyLevel;
  requiresHumanApproval: boolean;
  consentScopes: ConsentScope[];
  sensitivity: DataSensitivity;
}

export type NotificationKind =
  "reminder" | "insight" | "conversationInvitation" | "actionProposal" | "safetyIntervention";

export type NotificationPriority =
  "critical" | "important" | "contextual" | "gentle" | "digestOnly";

export interface BemaraNotification {
  id: string;
  userId: string;
  kind: NotificationKind;
  priority: NotificationPriority;
  domain?: LifeDomainId;
  title: string;
  explanationSignals: string[];
  offeredAction?: string;
  createdAt: string;
  deliveredAt?: string;
}

export type EntitlementPlan = "free" | "personal" | "intelligence";

export interface Entitlement {
  id: string;
  userId: string;
  plan: EntitlementPlan;
  featureCode: string;
  enabled: boolean;
  source: "manual" | "conekta" | "appleIap" | "googlePlay" | "promotion";
  startsAt: string;
  endsAt?: string;
}

export type ExternalProviderKind =
  | "supabase"
  | "openai"
  | "anthropic"
  | "resend"
  | "conekta"
  | "apple"
  | "google"
  | "microsoft"
  | "posthog"
  | "sentry";

export interface ExternalConnectionContract {
  id: string;
  userId?: string;
  provider: ExternalProviderKind;
  purpose: string;
  enabled: boolean;
  requiresSecret: boolean;
  consentScopes: ConsentScope[];
}
