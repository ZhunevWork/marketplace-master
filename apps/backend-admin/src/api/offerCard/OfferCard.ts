import { Product } from "../product/Product";

export type OfferCard = {
  createdAt: Date;
  description: string | null;
  id: string;
  imageUrl: string | null;
  name: string | null;
  price: number | null;
  product?: Product | null;
  updatedAt: Date;
};
