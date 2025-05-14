import { SortOrder } from "../../util/SortOrder";

export type OfferCardOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  imageUrl?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
  productId?: SortOrder;
  updatedAt?: SortOrder;
};
