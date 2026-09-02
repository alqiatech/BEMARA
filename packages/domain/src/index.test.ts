import { describe, expect, it } from "vitest";

import { futureCapabilities, officialSurfaces } from ".";

describe("BEMARA domain foundation", () => {
  it("keeps only the four official product surfaces", () => {
    expect(officialSurfaces.map((surface) => surface.id)).toEqual([
      "mobile",
      "personal",
      "publicSite",
      "operations",
    ]);
  });

  it("keeps community and clinical disabled by default", () => {
    expect(futureCapabilities.community.enabledByDefault).toBe(false);
    expect(futureCapabilities.clinical.enabledByDefault).toBe(false);
  });
});
