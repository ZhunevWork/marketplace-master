import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MarketplaceWhereUniqueInput } from "../marketplace/MarketplaceWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type MarketplaceSyncWhereInput = {
  externalId?: StringNullableFilter;
  id?: StringFilter;
  marketplace?: MarketplaceWhereUniqueInput;
  product?: ProductWhereUniqueInput;
  status?: StringNullableFilter;
};
