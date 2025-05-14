import { SortOrder } from "../../util/SortOrder";

export type MarketplaceSyncOrderByInput = {
  createdAt?: SortOrder;
  externalId?: SortOrder;
  id?: SortOrder;
  marketplaceId?: SortOrder;
  productId?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
