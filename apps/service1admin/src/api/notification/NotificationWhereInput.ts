import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type NotificationWhereInput = {
  ack?: BooleanNullableFilter;
  customer?: CustomerWhereUniqueInput;
  id?: StringFilter;
  message?: StringNullableFilter;
};
