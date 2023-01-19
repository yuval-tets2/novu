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
import { NotificationWhereInput } from "./NotificationWhereInput";
import { Type } from "class-transformer";
import { NotificationOrderByInput } from "./NotificationOrderByInput";

@ArgsType()
class NotificationFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => NotificationWhereInput,
  })
  @Field(() => NotificationWhereInput, { nullable: true })
  @Type(() => NotificationWhereInput)
  where?: NotificationWhereInput;

  @ApiProperty({
    required: false,
    type: [NotificationOrderByInput],
  })
  @Field(() => [NotificationOrderByInput], { nullable: true })
  @Type(() => NotificationOrderByInput)
  orderBy?: Array<NotificationOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { NotificationFindManyArgs };
