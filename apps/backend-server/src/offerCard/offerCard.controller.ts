import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { OfferCardService } from "./offerCard.service";
import { OfferCardControllerBase } from "./base/offerCard.controller.base";

@swagger.ApiTags("offerCards")
@common.Controller("offerCards")
export class OfferCardController extends OfferCardControllerBase {
  constructor(protected readonly service: OfferCardService) {
    super(service);
  }
}
