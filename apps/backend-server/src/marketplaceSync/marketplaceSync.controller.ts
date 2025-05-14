import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MarketplaceSyncService } from "./marketplaceSync.service";
import { MarketplaceSyncControllerBase } from "./base/marketplaceSync.controller.base";

@swagger.ApiTags("marketplaceSyncs")
@common.Controller("marketplaceSyncs")
export class MarketplaceSyncController extends MarketplaceSyncControllerBase {
  constructor(protected readonly service: MarketplaceSyncService) {
    super(service);
  }
}
