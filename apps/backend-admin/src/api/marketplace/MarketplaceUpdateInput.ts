import { MarketplaceSyncUpdateManyWithoutMarketplacesInput } from "./MarketplaceSyncUpdateManyWithoutMarketplacesInput";

export type MarketplaceUpdateInput = {
  apiKey?: string | null;
  description?: string | null;
  isActive?: boolean | null;
  marketplaceSyncs?: MarketplaceSyncUpdateManyWithoutMarketplacesInput;
  name?: string | null;
};
