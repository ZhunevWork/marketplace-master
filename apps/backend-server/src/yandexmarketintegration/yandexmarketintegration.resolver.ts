import * as graphql from "@nestjs/graphql";
import { YandexMarketIntegrationService } from "./yandexmarketintegration.service";

export class YandexMarketIntegrationResolver {
  constructor(protected readonly service: YandexMarketIntegrationService) {}

  @graphql.Query(() => String)
  async FetchYandexStatus(
    @graphql.Args("args")
    args: string
  ): Promise<string> {
    return this.service.FetchYandexStatus(args);
  }

  @graphql.Mutation(() => String)
  async SyncProductsYandex(
    @graphql.Args("args")
    args: string
  ): Promise<string> {
    return this.service.SyncProductsYandex(args);
  }
}
