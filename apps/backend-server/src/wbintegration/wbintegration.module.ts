import { Module } from "@nestjs/common";
import { WbIntegrationService } from "./wbintegration.service";
import { WbIntegrationController } from "./wbintegration.controller";
import { WbIntegrationResolver } from "./wbintegration.resolver";

@Module({
  controllers: [WbIntegrationController],
  providers: [WbIntegrationService, WbIntegrationResolver],
  exports: [WbIntegrationService],
})
export class WbIntegrationModule {}
