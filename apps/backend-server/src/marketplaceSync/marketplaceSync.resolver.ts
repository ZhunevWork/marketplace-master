import * as graphql from "@nestjs/graphql";
import { MarketplaceSyncResolverBase } from "./base/marketplaceSync.resolver.base";
import { MarketplaceSync } from "./base/MarketplaceSync";
import { MarketplaceSyncService } from "./marketplaceSync.service";

@graphql.Resolver(() => MarketplaceSync)
export class MarketplaceSyncResolver extends MarketplaceSyncResolverBase {
  constructor(protected readonly service: MarketplaceSyncService) {
    super(service);
  }
}
