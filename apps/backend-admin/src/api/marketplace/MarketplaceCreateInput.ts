import { MarketplaceSyncCreateNestedManyWithoutMarketplacesInput } from "./MarketplaceSyncCreateNestedManyWithoutMarketplacesInput";

export type MarketplaceCreateInput = {
  apiKey?: string | null;
  description?: string | null;
  isActive?: boolean | null;
  marketplaceSyncs?: MarketplaceSyncCreateNestedManyWithoutMarketplacesInput;
  name?: string | null;
};
