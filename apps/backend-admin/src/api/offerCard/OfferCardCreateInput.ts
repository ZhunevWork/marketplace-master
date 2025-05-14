import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type OfferCardCreateInput = {
  description?: string | null;
  imageUrl?: string | null;
  name?: string | null;
  price?: number | null;
  product?: ProductWhereUniqueInput | null;
};
