import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CustomizationModuleBase } from "./base/customization.module.base";
import { CustomizationService } from "./customization.service";
import { CustomizationController } from "./customization.controller";
import { CustomizationResolver } from "./customization.resolver";

@Module({
  imports: [CustomizationModuleBase, forwardRef(() => AuthModule)],
  controllers: [CustomizationController],
  providers: [CustomizationService, CustomizationResolver],
  exports: [CustomizationService],
})
export class CustomizationModule {}
