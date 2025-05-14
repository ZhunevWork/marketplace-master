import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { MarketplaceSyncUpdateManyWithoutProductsInput } from "./MarketplaceSyncUpdateManyWithoutProductsInput";
import { OfferCardUpdateManyWithoutProductsInput } from "./OfferCardUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  account?: AccountWhereUniqueInput | null;
  description?: string | null;
  imageUrl?: string | null;
  marketplaceSyncs?: MarketplaceSyncUpdateManyWithoutProductsInput;
  name?: string | null;
  offerCards?: OfferCardUpdateManyWithoutProductsInput;
  price?: number | null;
};
