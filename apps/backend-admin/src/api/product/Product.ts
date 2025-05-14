import { Account } from "../account/Account";
import { MarketplaceSync } from "../marketplaceSync/MarketplaceSync";
import { OfferCard } from "../offerCard/OfferCard";

export type Product = {
  account?: Account | null;
  createdAt: Date;
  description: string | null;
  id: string;
  imageUrl: string | null;
  marketplaceSyncs?: Array<MarketplaceSync>;
  name: string | null;
  offerCards?: Array<OfferCard>;
  price: number | null;
  updatedAt: Date;
};
