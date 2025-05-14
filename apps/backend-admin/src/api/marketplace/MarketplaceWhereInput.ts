import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { MarketplaceSyncListRelationFilter } from "../marketplaceSync/MarketplaceSyncListRelationFilter";

export type MarketplaceWhereInput = {
  apiKey?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  isActive?: BooleanNullableFilter;
  marketplaceSyncs?: MarketplaceSyncListRelationFilter;
  name?: StringNullableFilter;
};
