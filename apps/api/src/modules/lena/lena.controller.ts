import { Controller, Get } from "@nestjs/common";

import { LenaOrchestratorService } from "./lena-orchestrator.service";

@Controller("lena")
export class LenaController {
  constructor(private readonly lenaOrchestrator: LenaOrchestratorService) {}

  @Get("foundation")
  foundation() {
    return this.lenaOrchestrator.getFoundation();
  }
}
