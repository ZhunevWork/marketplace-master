import { OfferCardWhereInput } from "./OfferCardWhereInput";
import { OfferCardOrderByInput } from "./OfferCardOrderByInput";

export type OfferCardFindManyArgs = {
  where?: OfferCardWhereInput;
  orderBy?: Array<OfferCardOrderByInput>;
  skip?: number;
  take?: number;
};
