import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TextInputService } from "./textInput.service";
import { TextInputControllerBase } from "./base/textInput.controller.base";

@swagger.ApiTags("textInputs")
@common.Controller("textInputs")
export class TextInputController extends TextInputControllerBase {
  constructor(
    protected readonly service: TextInputService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
