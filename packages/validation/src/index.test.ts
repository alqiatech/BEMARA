import { describe, expect, it } from "vitest";

import { lenaRequestSchema } from ".";

describe("BEMARA validation", () => {
  it("supports temporary LENA conversations that do not enter personal memory", () => {
    const parsed = lenaRequestSchema.parse({
      userId: "00000000-0000-4000-8000-000000000000",
      mode: "temporary",
      message: "No guardes esto.",
      temporary: true,
    });

    expect(parsed.temporary).toBe(true);
    expect(parsed.locale).toBe("es-MX");
  });
});
