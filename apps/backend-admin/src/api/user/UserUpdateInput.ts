import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { SubscriptionPlanWhereUniqueInput } from "../subscriptionPlan/SubscriptionPlanWhereUniqueInput";

export type UserUpdateInput = {
  account?: AccountWhereUniqueInput | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  subscriptionPlan?: SubscriptionPlanWhereUniqueInput | null;
  username?: string;
};
