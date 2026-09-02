import { Module } from "@nestjs/common";

import { HealthModule } from "./modules/health/health.module";
import { LenaModule } from "./modules/lena/lena.module";
import { PrivacyModule } from "./modules/privacy/privacy.module";

@Module({
  imports: [HealthModule, PrivacyModule, LenaModule],
})
export class AppModule {}
