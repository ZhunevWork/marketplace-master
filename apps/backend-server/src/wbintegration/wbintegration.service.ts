import { Injectable } from "@nestjs/common";

@Injectable()
export class WbIntegrationService {
  constructor() {}
  async FetchWbStatus(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async SyncProducts(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
