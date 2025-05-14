import { Account } from "../account/Account";
import { JsonValue } from "type-fest";
import { SubscriptionPlan } from "../subscriptionPlan/SubscriptionPlan";

export type User = {
  account?: Account | null;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  subscriptionPlan?: SubscriptionPlan | null;
  updatedAt: Date;
  username: string;
};
