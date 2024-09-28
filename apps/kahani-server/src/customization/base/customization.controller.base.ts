/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request, Response } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { FileInterceptor } from "@nestjs/platform-express";
import { CustomizationService } from "../customization.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { CustomizationCreateInput } from "./CustomizationCreateInput";
import { Customization } from "./Customization";
import { CustomizationFindManyArgs } from "./CustomizationFindManyArgs";
import { CustomizationWhereUniqueInput } from "./CustomizationWhereUniqueInput";
import { CustomizationUpdateInput } from "./CustomizationUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class CustomizationControllerBase {
  constructor(
    protected readonly service: CustomizationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Customization })
  @nestAccessControl.UseRoles({
    resource: "Customization",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createCustomization(
    @common.Body() data: CustomizationCreateInput
  ): Promise<Customization> {
    return await this.service.createCustomization({
      data: data,
      select: {
        associatedReel: true,
        backgroundMusic: true,
        createdAt: true,
        id: true,
        reelCustomization: true,
        theme: true,
        transitions: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Customization] })
  @ApiNestedQuery(CustomizationFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Customization",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async customizations(
    @common.Req() request: Request
  ): Promise<Customization[]> {
    const args = plainToClass(CustomizationFindManyArgs, request.query);
    return this.service.customizations({
      ...args,
      select: {
        associatedReel: true,
        backgroundMusic: true,
        createdAt: true,
        id: true,
        reelCustomization: true,
        theme: true,
        transitions: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Customization })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Customization",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async customization(
    @common.Param() params: CustomizationWhereUniqueInput
  ): Promise<Customization | null> {
    const result = await this.service.customization({
      where: params,
      select: {
        associatedReel: true,
        backgroundMusic: true,
        createdAt: true,
        id: true,
        reelCustomization: true,
        theme: true,
        transitions: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Customization })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Customization",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateCustomization(
    @common.Param() params: CustomizationWhereUniqueInput,
    @common.Body() data: CustomizationUpdateInput
  ): Promise<Customization | null> {
    try {
      return await this.service.updateCustomization({
        where: params,
        data: data,
        select: {
          associatedReel: true,
          backgroundMusic: true,
          createdAt: true,
          id: true,
          reelCustomization: true,
          theme: true,
          transitions: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Customization })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Customization",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteCustomization(
    @common.Param() params: CustomizationWhereUniqueInput
  ): Promise<Customization | null> {
    try {
      return await this.service.deleteCustomization({
        where: params,
        select: {
          associatedReel: true,
          backgroundMusic: true,
          createdAt: true,
          id: true,
          reelCustomization: true,
          theme: true,
          transitions: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Put(":id/backgroundMusic")
  @common.UseInterceptors(FileInterceptor("file"))
  @swagger.ApiConsumes("multipart/form-data")
  @swagger.ApiBody({
    schema: {
      type: "object",

      properties: {
        file: {
          type: "string",
          format: "binary",
        },
      },
    },
  })
  @swagger.ApiParam({
    name: "id",
    type: "string",
    required: true,
  })
  @swagger.ApiCreatedResponse({
    type: Customization,
    status: "2XX",
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  async uploadBackgroundMusic(
    @common.Param()
    params: CustomizationWhereUniqueInput,
    @common.UploadedFile()
    file: Express.Multer.File
  ): Promise<Customization> {
    return this.service.uploadBackgroundMusic(
      {
        where: params,
      },
      Object.assign(file, {
        filename: file.originalname,
      })
    );
  }

  @common.Get(":id/backgroundMusic")
  @swagger.ApiParam({
    name: "id",
    type: "string",
    required: true,
  })
  @swagger.ApiOkResponse({
    type: common.StreamableFile,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  async downloadBackgroundMusic(
    @common.Param()
    params: CustomizationWhereUniqueInput,
    @common.Res({
      passthrough: true,
    })
    res: Response
  ): Promise<common.StreamableFile> {
    const result = await this.service.downloadBackgroundMusic({
      where: params,
    });

    if (result === null) {
      throw new errors.NotFoundException(
        "No resource was found for ",
        JSON.stringify(params)
      );
    }

    res.setHeader(
      "Content-Disposition",
      `attachment; filename=${result.filename}`
    );
    res.setHeader("Content-Type", result.mimetype);
    return result.stream;
  }

  @common.Delete(":id/backgroundMusic")
  @swagger.ApiOkResponse({
    type: Customization,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  async deleteBackgroundMusic(
    @common.Param()
    params: CustomizationWhereUniqueInput
  ): Promise<Customization> {
    return this.service.deleteBackgroundMusic({
      where: params,
    });
  }
}
