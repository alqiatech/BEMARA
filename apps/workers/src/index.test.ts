import { describe, expect, it } from "vitest";

import { createNotificationJob, workerContracts } from ".";

describe("BEMARA worker foundation", () => {
  it("keeps worker payload contracts non-sensitive by default", () => {
    expect(workerContracts.every((contract) => contract.sensitivePayloadAllowed === false)).toBe(
      true,
    );
  });

  it("prepares notification intelligence jobs", () => {
    expect(
      createNotificationJob({
        userId: "user_1",
        kind: "conversationInvitation",
        priority: "gentle",
        reasonCode: "contextual_check_in",
      }).featureEnabled,
    ).toBe(true);
  });
});
