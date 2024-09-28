import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type TextInputWhereInput = {
  associatedReel?: StringNullableFilter;
  content?: StringNullableFilter;
  id?: StringFilter;
  reelReference?: StringNullableFilter;
};
