import * as graphql from "@nestjs/graphql";
import { AiGenerationService } from "./aigeneration.service";

export class AiGenerationResolver {
  constructor(protected readonly service: AiGenerationService) {}

  @graphql.Mutation(() => String)
  async GenerateDescription(
    @graphql.Args("args")
    args: string
  ): Promise<string> {
    return this.service.GenerateDescription(args);
  }

  @graphql.Mutation(() => String)
  async GenerateImage(
    @graphql.Args("args")
    args: string
  ): Promise<string> {
    return this.service.GenerateImage(args);
  }
}
