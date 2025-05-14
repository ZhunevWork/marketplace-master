import { ProductUpdateManyWithoutAccountsInput } from "./ProductUpdateManyWithoutAccountsInput";
import { UserUpdateManyWithoutAccountsInput } from "./UserUpdateManyWithoutAccountsInput";

export type AccountUpdateInput = {
  name?: string | null;
  products?: ProductUpdateManyWithoutAccountsInput;
  users?: UserUpdateManyWithoutAccountsInput;
};
