import { Injectable } from "@nestjs/common";

@Injectable()
export class OzonIntegrationService {
  constructor() {}
  async FetchOzonStatus(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async SyncProductsOzon(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
