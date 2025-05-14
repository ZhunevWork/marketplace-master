import { Injectable } from "@nestjs/common";

@Injectable()
export class YandexMarketIntegrationService {
  constructor() {}
  async FetchYandexStatus(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async SyncProductsYandex(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
