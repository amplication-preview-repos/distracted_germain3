import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CustomizationService } from "./customization.service";
import { CustomizationControllerBase } from "./base/customization.controller.base";

@swagger.ApiTags("customizations")
@common.Controller("customizations")
export class CustomizationController extends CustomizationControllerBase {
  constructor(
    protected readonly service: CustomizationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
