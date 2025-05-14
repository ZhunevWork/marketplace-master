import { MarketplaceSync as TMarketplaceSync } from "../api/marketplaceSync/MarketplaceSync";

export const MARKETPLACESYNC_TITLE_FIELD = "externalId";

export const MarketplaceSyncTitle = (record: TMarketplaceSync): string => {
  return record.externalId?.toString() || String(record.id);
};
