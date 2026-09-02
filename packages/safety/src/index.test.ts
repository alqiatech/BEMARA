import { describe, expect, it } from "vitest";

import { assessLenaAction, prohibitedLenaClaims } from ".";

describe("BEMARA safety", () => {
  it("blocks clinical framing from becoming an allowed visible claim", () => {
    expect(prohibitedLenaClaims).toContain("medicalDiagnosis");
    expect(prohibitedLenaClaims).toContain("regulatedFinancialAdvice");
  });

  it("requires approval when an action touches sensitive consent scopes", () => {
    expect(
      assessLenaAction({
        id: "proposal_1",
        userId: "user_1",
        title: "Preparar resumen de salud",
        domain: "bodyHealth",
        autonomyLevel: "prepare",
        requiresHumanApproval: false,
        consentScopes: ["health"],
        sensitivity: "sensitive",
      }).requiresHumanApproval,
    ).toBe(true);
  });
});
