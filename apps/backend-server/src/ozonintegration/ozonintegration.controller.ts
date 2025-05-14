import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { OzonIntegrationService } from "./ozonintegration.service";

@swagger.ApiTags("ozonIntegrations")
@common.Controller("ozonIntegrations")
export class OzonIntegrationController {
  constructor(protected readonly service: OzonIntegrationService) {}

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
  async FetchOzonStatus(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.FetchOzonStatus(body);
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
  async SyncProductsOzon(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.SyncProductsOzon(body);
      }
}
