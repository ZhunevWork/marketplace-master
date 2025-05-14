import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SubscriptionPlanWhereUniqueInput } from "../subscriptionPlan/SubscriptionPlanWhereUniqueInput";

export type UserWhereInput = {
  account?: AccountWhereUniqueInput;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  subscriptionPlan?: SubscriptionPlanWhereUniqueInput;
  username?: StringFilter;
};
