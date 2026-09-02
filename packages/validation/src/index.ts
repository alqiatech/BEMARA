import { z } from "zod";

export const uuidSchema = z.string().uuid();
export const isoDateTimeSchema = z.string().datetime({ offset: true });
export const localeSchema = z.enum(["es-MX", "en-US"]);

export const consentScopeSchema = z.enum([
  "identity",
  "lifeGraph",
  "memory",
  "sensitiveMemory",
  "health",
  "mentalWellbeing",
  "finance",
  "documents",
  "mail",
  "calendar",
  "notifications",
  "analytics",
  "aiProcessing",
  "externalConnection",
]);

export const dataSensitivitySchema = z.enum(["standard", "personal", "sensitive", "restricted"]);

export const lenaConversationModeSchema = z.enum([
  "listen",
  "understand",
  "perspective",
  "decide",
  "act",
  "temporary",
]);

export const lenaRequestSchema = z.object({
  userId: uuidSchema,
  locale: localeSchema.default("es-MX"),
  mode: lenaConversationModeSchema,
  message: z.string().min(1).max(8000),
  temporary: z.boolean().default(false),
  consentScopes: z.array(consentScopeSchema).default([]),
});

export const notificationKindSchema = z.enum([
  "reminder",
  "insight",
  "conversationInvitation",
  "actionProposal",
  "safetyIntervention",
]);

export const notificationPrioritySchema = z.enum([
  "critical",
  "important",
  "contextual",
  "gentle",
  "digestOnly",
]);

export const externalProviderSchema = z.enum([
  "supabase",
  "openai",
  "anthropic",
  "resend",
  "conekta",
  "apple",
  "google",
  "microsoft",
  "posthog",
  "sentry",
]);

export type LenaRequestInput = z.infer<typeof lenaRequestSchema>;
