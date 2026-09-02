import { describe, expect, it } from "vitest";

import { dictionaries, locales, translate } from ".";

describe("BEMARA i18n", () => {
  it("ships es-MX and en-US from foundation", () => {
    expect(locales).toEqual(["es-MX", "en-US"]);
  });

  it("keeps dictionary keys aligned across locales", () => {
    expect(Object.keys(dictionaries["en-US"]).sort()).toEqual(
      Object.keys(dictionaries["es-MX"]).sort(),
    );
  });

  it("translates the visible intelligence name consistently", () => {
    expect(translate("es-MX", "brand.intelligence")).toBe("LENA");
    expect(translate("en-US", "brand.intelligence")).toBe("LENA");
  });
});
