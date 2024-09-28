import { InputJsonValue } from "../../types";

export type CustomizationCreateInput = {
  associatedReel?: string | null;
  backgroundMusic?: InputJsonValue;
  reelCustomization?: string | null;
  theme?: "Option1" | null;
  transitions?: Array<"Option1">;
};
