import * as graphql from "@nestjs/graphql";
import { WbIntegrationService } from "./wbintegration.service";

export class WbIntegrationResolver {
  constructor(protected readonly service: WbIntegrationService) {}

  @graphql.Query(() => String)
  async FetchWbStatus(
    @graphql.Args("args")
    args: string
  ): Promise<string> {
    return this.service.FetchWbStatus(args);
  }

  @graphql.Mutation(() => String)
  async SyncProducts(
    @graphql.Args("args")
    args: string
  ): Promise<string> {
    return this.service.SyncProducts(args);
  }
}
