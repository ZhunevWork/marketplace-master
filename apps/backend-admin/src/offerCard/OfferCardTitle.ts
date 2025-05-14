import { OfferCard as TOfferCard } from "../api/offerCard/OfferCard";

export const OFFERCARD_TITLE_FIELD = "name";

export const OfferCardTitle = (record: TOfferCard): string => {
  return record.name?.toString() || String(record.id);
};
