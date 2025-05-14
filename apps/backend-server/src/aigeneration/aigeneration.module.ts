import { Module } from "@nestjs/common";
import { AiGenerationService } from "./aigeneration.service";
import { AiGenerationController } from "./aigeneration.controller";
import { AiGenerationResolver } from "./aigeneration.resolver";

@Module({
  controllers: [AiGenerationController],
  providers: [AiGenerationService, AiGenerationResolver],
  exports: [AiGenerationService],
})
export class AiGenerationModule {}
