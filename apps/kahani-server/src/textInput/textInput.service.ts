import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TextInputServiceBase } from "./base/textInput.service.base";

@Injectable()
export class TextInputService extends TextInputServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
