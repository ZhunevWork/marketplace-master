import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { MarketplaceSyncCreateNestedManyWithoutProductsInput } from "./MarketplaceSyncCreateNestedManyWithoutProductsInput";
import { OfferCardCreateNestedManyWithoutProductsInput } from "./OfferCardCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  account?: AccountWhereUniqueInput | null;
  description?: string | null;
  imageUrl?: string | null;
  marketplaceSyncs?: MarketplaceSyncCreateNestedManyWithoutProductsInput;
  name?: string | null;
  offerCards?: OfferCardCreateNestedManyWithoutProductsInput;
  price?: number | null;
};
