import { Module } from "@nestjs/common";
import { OfferCardModuleBase } from "./base/offerCard.module.base";
import { OfferCardService } from "./offerCard.service";
import { OfferCardController } from "./offerCard.controller";
import { OfferCardResolver } from "./offerCard.resolver";

@Module({
  imports: [OfferCardModuleBase],
  controllers: [OfferCardController],
  providers: [OfferCardService, OfferCardResolver],
  exports: [OfferCardService],
})
export class OfferCardModule {}
