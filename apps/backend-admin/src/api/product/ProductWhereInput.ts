import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MarketplaceSyncListRelationFilter } from "../marketplaceSync/MarketplaceSyncListRelationFilter";
import { OfferCardListRelationFilter } from "../offerCard/OfferCardListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type ProductWhereInput = {
  account?: AccountWhereUniqueInput;
  description?: StringNullableFilter;
  id?: StringFilter;
  imageUrl?: StringNullableFilter;
  marketplaceSyncs?: MarketplaceSyncListRelationFilter;
  name?: StringNullableFilter;
  offerCards?: OfferCardListRelationFilter;
  price?: FloatNullableFilter;
};
