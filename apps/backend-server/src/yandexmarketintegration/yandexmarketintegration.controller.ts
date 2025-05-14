import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { YandexMarketIntegrationService } from "./yandexmarketintegration.service";

@swagger.ApiTags("yandexMarketIntegrations")
@common.Controller("yandexMarketIntegrations")
export class YandexMarketIntegrationController {
  constructor(protected readonly service: YandexMarketIntegrationService) {}

  @common.Get("/status")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async FetchYandexStatus(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.FetchYandexStatus(body);
      }

  @common.Post("/sync-products")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async SyncProductsYandex(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.SyncProductsYandex(body);
      }
}
