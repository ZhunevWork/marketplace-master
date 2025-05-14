import { Module } from "@nestjs/common";
import { MarketplaceSyncModuleBase } from "./base/marketplaceSync.module.base";
import { MarketplaceSyncService } from "./marketplaceSync.service";
import { MarketplaceSyncController } from "./marketplaceSync.controller";
import { MarketplaceSyncResolver } from "./marketplaceSync.resolver";

@Module({
  imports: [MarketplaceSyncModuleBase],
  controllers: [MarketplaceSyncController],
  providers: [MarketplaceSyncService, MarketplaceSyncResolver],
  exports: [MarketplaceSyncService],
})
export class MarketplaceSyncModule {}
