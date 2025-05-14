import { UserCreateNestedManyWithoutSubscriptionPlansInput } from "./UserCreateNestedManyWithoutSubscriptionPlansInput";

export type SubscriptionPlanCreateInput = {
  description?: string | null;
  isActive?: boolean | null;
  name?: string | null;
  price?: number | null;
  users?: UserCreateNestedManyWithoutSubscriptionPlansInput;
};
