import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type OfferCardWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  imageUrl?: StringNullableFilter;
  name?: StringNullableFilter;
  price?: FloatNullableFilter;
  product?: ProductWhereUniqueInput;
};
