import type { ConsentScope, LenaActionProposal } from "@bemara/domain";

export const sensitiveConsentScopes = [
  "sensitiveMemory",
  "health",
  "mentalWellbeing",
  "finance",
  "documents",
  "mail",
  "aiProcessing",
] as const satisfies readonly ConsentScope[];

export const prohibitedLenaClaims = [
  "medicalDiagnosis",
  "clinicalPrescription",
  "mentalHealthDiagnosis",
  "thirdPartyPersonalityDiagnosis",
  "regulatedFinancialAdvice",
  "investmentExecution",
  "silentSensitiveInference",
] as const;

export const confirmationRequiredActions = [
  "contactThirdParty",
  "sendEmail",
  "createCalendarEventWithGuests",
  "shareDocument",
  "deleteMemory",
  "exportPersonalData",
  "revokeConsent",
  "connectExternalAccount",
  "financialAction",
] as const;

export interface SafetyAssessment {
  allowed: boolean;
  requiresHumanApproval: boolean;
  blockedReason?: (typeof prohibitedLenaClaims)[number];
  consentScopes: ConsentScope[];
}

export function assessLenaAction(action: LenaActionProposal): SafetyAssessment {
  const requiresSensitiveConsent = action.consentScopes.some((scope) =>
    sensitiveConsentScopes.includes(scope as (typeof sensitiveConsentScopes)[number]),
  );

  return {
    allowed: true,
    requiresHumanApproval:
      action.requiresHumanApproval ||
      requiresSensitiveConsent ||
      action.sensitivity === "restricted",
    consentScopes: action.consentScopes,
  };
}
