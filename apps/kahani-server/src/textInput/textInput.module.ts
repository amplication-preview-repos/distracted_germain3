import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TextInputModuleBase } from "./base/textInput.module.base";
import { TextInputService } from "./textInput.service";
import { TextInputController } from "./textInput.controller";
import { TextInputResolver } from "./textInput.resolver";

@Module({
  imports: [TextInputModuleBase, forwardRef(() => AuthModule)],
  controllers: [TextInputController],
  providers: [TextInputService, TextInputResolver],
  exports: [TextInputService],
})
export class TextInputModule {}
