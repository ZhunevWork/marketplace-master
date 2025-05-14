import * as graphql from "@nestjs/graphql";
import { OfferCardResolverBase } from "./base/offerCard.resolver.base";
import { OfferCard } from "./base/OfferCard";
import { OfferCardService } from "./offerCard.service";

@graphql.Resolver(() => OfferCard)
export class OfferCardResolver extends OfferCardResolverBase {
  constructor(protected readonly service: OfferCardService) {
    super(service);
  }
}
