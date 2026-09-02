import { Controller, Get } from "@nestjs/common";

import { featureFlagDefaults } from "@bemara/config";
import { officialSurfaces } from "@bemara/domain";

@Controller("health")
export class HealthController {
  @Get()
  health() {
    return {
      ok: true,
      service: "bemara-api" as const,
      surfaceContracts: officialSurfaces.map((surface) => surface.id),
      featureFlags: featureFlagDefaults,
      timestamp: new Date().toISOString(),
    };
  }
}
