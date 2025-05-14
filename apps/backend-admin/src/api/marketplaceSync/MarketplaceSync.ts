import { Marketplace } from "../marketplace/Marketplace";
import { Product } from "../product/Product";

export type MarketplaceSync = {
  createdAt: Date;
  externalId: string | null;
  id: string;
  marketplace?: Marketplace | null;
  product?: Product | null;
  status: string | null;
  updatedAt: Date;
};
