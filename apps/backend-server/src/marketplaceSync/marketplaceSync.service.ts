import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MarketplaceSyncServiceBase } from "./base/marketplaceSync.service.base";

@Injectable()
export class MarketplaceSyncService extends MarketplaceSyncServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
