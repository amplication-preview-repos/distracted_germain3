import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";

export type CustomizationWhereInput = {
  associatedReel?: StringNullableFilter;
  backgroundMusic?: JsonFilter;
  id?: StringFilter;
  reelCustomization?: StringNullableFilter;
  theme?: "Option1";
};
