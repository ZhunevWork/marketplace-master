import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  accountId?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  password?: SortOrder;
  roles?: SortOrder;
  subscriptionPlanId?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
