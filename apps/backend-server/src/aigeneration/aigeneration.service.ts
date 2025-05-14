import { Injectable } from "@nestjs/common";

@Injectable()
export class AiGenerationService {
  constructor() {}
  async GenerateDescription(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async GenerateImage(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
