import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OfferCardServiceBase } from "./base/offerCard.service.base";

@Injectable()
export class OfferCardService extends OfferCardServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
