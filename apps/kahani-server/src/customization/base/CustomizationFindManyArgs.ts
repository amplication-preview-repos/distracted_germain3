/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CustomizationWhereInput } from "./CustomizationWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { CustomizationOrderByInput } from "./CustomizationOrderByInput";

@ArgsType()
class CustomizationFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CustomizationWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => CustomizationWhereInput, { nullable: true })
  @Type(() => CustomizationWhereInput)
  where?: CustomizationWhereInput;

  @ApiProperty({
    required: false,
    type: [CustomizationOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [CustomizationOrderByInput], { nullable: true })
  @Type(() => CustomizationOrderByInput)
  orderBy?: Array<CustomizationOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { CustomizationFindManyArgs as CustomizationFindManyArgs };
