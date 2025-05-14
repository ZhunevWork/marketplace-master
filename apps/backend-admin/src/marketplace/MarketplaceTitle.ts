import { Marketplace as TMarketplace } from "../api/marketplace/Marketplace";

export const MARKETPLACE_TITLE_FIELD = "name";

export const MarketplaceTitle = (record: TMarketplace): string => {
  return record.name?.toString() || String(record.id);
};
