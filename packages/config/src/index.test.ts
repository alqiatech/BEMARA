import { describe, expect, it } from "vitest";

import { featureFlagDefaults, parseServerEnv } from ".";

describe("BEMARA config", () => {
  it("keeps future community and clinical capabilities disabled by default", () => {
    expect(featureFlagDefaults.community.enabled).toBe(false);
    expect(featureFlagDefaults.clinical.enabled).toBe(false);
  });

  it("accepts empty provider secrets in development contracts", () => {
    expect(parseServerEnv({ NODE_ENV: "development" }).NODE_ENV).toBe("development");
  });
});
