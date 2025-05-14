import { MarketplaceSync } from "../marketplaceSync/MarketplaceSync";

export type Marketplace = {
  apiKey: string | null;
  createdAt: Date;
  description: string | null;
  id: string;
  isActive: boolean | null;
  marketplaceSyncs?: Array<MarketplaceSync>;
  name: string | null;
  updatedAt: Date;
};
