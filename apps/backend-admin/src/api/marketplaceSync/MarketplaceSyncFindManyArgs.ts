import { MarketplaceSyncWhereInput } from "./MarketplaceSyncWhereInput";
import { MarketplaceSyncOrderByInput } from "./MarketplaceSyncOrderByInput";

export type MarketplaceSyncFindManyArgs = {
  where?: MarketplaceSyncWhereInput;
  orderBy?: Array<MarketplaceSyncOrderByInput>;
  skip?: number;
  take?: number;
};
