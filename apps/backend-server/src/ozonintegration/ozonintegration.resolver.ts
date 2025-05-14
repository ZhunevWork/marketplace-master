import * as graphql from "@nestjs/graphql";
import { OzonIntegrationService } from "./ozonintegration.service";

export class OzonIntegrationResolver {
  constructor(protected readonly service: OzonIntegrationService) {}

  @graphql.Query(() => String)
  async FetchOzonStatus(
    @graphql.Args("args")
    args: string
  ): Promise<string> {
    return this.service.FetchOzonStatus(args);
  }

  @graphql.Mutation(() => String)
  async SyncProductsOzon(
    @graphql.Args("args")
    args: string
  ): Promise<string> {
    return this.service.SyncProductsOzon(args);
  }
}
