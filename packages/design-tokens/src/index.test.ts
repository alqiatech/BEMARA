import { describe, expect, it } from "vitest";

import { bemaraColors, bemaraTonalUse, bemaraTypography } from ".";

describe("BEMARA design tokens", () => {
  it("preserves the official identity palette", () => {
    expect(bemaraColors).toMatchObject({
      blackPlum: "#241820",
      bordeauxNoir: "#5B3443",
      mauveTaupe: "#9C7B85",
      roseBeige: "#C8A69A",
      silkCream: "#F2E9E2",
      ivory: "#F7F1ED",
    });
  });

  it("keeps the official tonal hierarchy", () => {
    expect(bemaraTonalUse).toEqual({
      lightBase: 40,
      darkBase: 25,
      primaryAccent: 15,
      secondary: 10,
      warmSecondary: 10,
    });
  });

  it("uses Questrial for interface hierarchy and Montserrat for support text", () => {
    expect(bemaraTypography.desktop.h1.family).toBe("Questrial");
    expect(bemaraTypography.desktop.button.family).toBe("Montserrat");
    expect(bemaraTypography.mobile.h1.fontSize).toBe("34px");
  });
});
