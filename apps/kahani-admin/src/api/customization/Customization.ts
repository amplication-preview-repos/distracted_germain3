import { JsonValue } from "type-fest";

export type Customization = {
  associatedReel: string | null;
  backgroundMusic: JsonValue;
  createdAt: Date;
  id: string;
  reelCustomization: string | null;
  theme?: "Option1" | null;
  transitions?: Array<"Option1">;
  updatedAt: Date;
};
