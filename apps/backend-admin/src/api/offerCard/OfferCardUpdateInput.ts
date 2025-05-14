import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type OfferCardUpdateInput = {
  description?: string | null;
  imageUrl?: string | null;
  name?: string | null;
  price?: number | null;
  product?: ProductWhereUniqueInput | null;
};
