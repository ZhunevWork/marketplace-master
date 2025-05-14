import { Module } from "@nestjs/common";
import { OzonIntegrationService } from "./ozonintegration.service";
import { OzonIntegrationController } from "./ozonintegration.controller";
import { OzonIntegrationResolver } from "./ozonintegration.resolver";

@Module({
  controllers: [OzonIntegrationController],
  providers: [OzonIntegrationService, OzonIntegrationResolver],
  exports: [OzonIntegrationService],
})
export class OzonIntegrationModule {}
