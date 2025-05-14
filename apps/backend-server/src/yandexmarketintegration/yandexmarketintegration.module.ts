import { Module } from "@nestjs/common";
import { YandexMarketIntegrationService } from "./yandexmarketintegration.service";
import { YandexMarketIntegrationController } from "./yandexmarketintegration.controller";
import { YandexMarketIntegrationResolver } from "./yandexmarketintegration.resolver";

@Module({
  controllers: [YandexMarketIntegrationController],
  providers: [YandexMarketIntegrationService, YandexMarketIntegrationResolver],
  exports: [YandexMarketIntegrationService],
})
export class YandexMarketIntegrationModule {}
