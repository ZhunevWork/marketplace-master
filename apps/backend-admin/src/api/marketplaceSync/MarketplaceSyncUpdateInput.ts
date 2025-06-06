import { MarketplaceWhereUniqueInput } from "../marketplace/MarketplaceWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type MarketplaceSyncUpdateInput = {
  externalId?: string | null;
  marketplace?: MarketplaceWhereUniqueInput | null;
  product?: ProductWhereUniqueInput | null;
  status?: string | null;
};
