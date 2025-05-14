import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type SubscriptionPlanWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  isActive?: BooleanNullableFilter;
  name?: StringNullableFilter;
  price?: FloatNullableFilter;
  users?: UserListRelationFilter;
};
