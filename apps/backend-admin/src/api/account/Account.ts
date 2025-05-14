import { Product } from "../product/Product";
import { User } from "../user/User";

export type Account = {
  createdAt: Date;
  id: string;
  name: string | null;
  products?: Array<Product>;
  updatedAt: Date;
  users?: Array<User>;
};
