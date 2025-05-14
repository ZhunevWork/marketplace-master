import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type AccountWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  products?: ProductListRelationFilter;
  users?: UserListRelationFilter;
};
