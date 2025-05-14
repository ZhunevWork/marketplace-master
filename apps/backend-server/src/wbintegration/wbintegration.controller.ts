import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { WbIntegrationService } from "./wbintegration.service";

@swagger.ApiTags("wbIntegrations")
@common.Controller("wbIntegrations")
export class WbIntegrationController {
  constructor(protected readonly service: WbIntegrationService) {}

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
  async FetchWbStatus(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.FetchWbStatus(body);
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
  async SyncProducts(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.SyncProducts(body);
      }
}
