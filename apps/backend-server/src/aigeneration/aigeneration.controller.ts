import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { AiGenerationService } from "./aigeneration.service";

@swagger.ApiTags("aiGenerations")
@common.Controller("aiGenerations")
export class AiGenerationController {
  constructor(protected readonly service: AiGenerationService) {}

  @common.Post("/generate-description")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GenerateDescription(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.GenerateDescription(body);
      }

  @common.Post("/generate-image")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GenerateImage(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.GenerateImage(body);
      }
}
