import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  accountId?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  imageUrl?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
  updatedAt?: SortOrder;
};
