import { Module } from "@nestjs/common";

import { LenaController } from "./lena.controller";
import { LenaOrchestratorService } from "./lena-orchestrator.service";

@Module({
  controllers: [LenaController],
  providers: [LenaOrchestratorService],
  exports: [LenaOrchestratorService],
})
export class LenaModule {}
