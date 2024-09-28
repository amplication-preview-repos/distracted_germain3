import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ReelWhereInput = {
  createdBy?: StringNullableFilter;
  creator?: StringNullableFilter;
  description?: StringNullableFilter;
  duration?: IntNullableFilter;
  id?: StringFilter;
  title?: StringNullableFilter;
};
