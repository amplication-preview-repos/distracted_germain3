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
import { TextInputWhereInput } from "./TextInputWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class TextInputCountArgs {
  @ApiProperty({
    required: false,
    type: () => TextInputWhereInput,
  })
  @Field(() => TextInputWhereInput, { nullable: true })
  @Type(() => TextInputWhereInput)
  where?: TextInputWhereInput;
}

export { TextInputCountArgs as TextInputCountArgs };