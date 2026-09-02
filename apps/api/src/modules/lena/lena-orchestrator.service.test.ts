import { describe, expect, it } from "vitest";

import { LenaOrchestratorService } from "./lena-orchestrator.service";

describe("LENA orchestrator foundation", () => {
  it("keeps LENA as the only visible intelligence", () => {
    expect(new LenaOrchestratorService().getFoundation().visibleName).toBe("LENA");
  });

  it("does not allow provider calls directly from the frontend", () => {
    expect(new LenaOrchestratorService().getFoundation().directProviderAccessFromFrontend).toBe(
      false,
    );
  });
});
