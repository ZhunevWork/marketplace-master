import { ProductCreateNestedManyWithoutAccountsInput } from "./ProductCreateNestedManyWithoutAccountsInput";
import { UserCreateNestedManyWithoutAccountsInput } from "./UserCreateNestedManyWithoutAccountsInput";

export type AccountCreateInput = {
  name?: string | null;
  products?: ProductCreateNestedManyWithoutAccountsInput;
  users?: UserCreateNestedManyWithoutAccountsInput;
};
