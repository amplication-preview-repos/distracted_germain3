import { Customization as TCustomization } from "../api/customization/Customization";

export const CUSTOMIZATION_TITLE_FIELD = "associatedReel";

export const CustomizationTitle = (record: TCustomization): string => {
  return record.associatedReel?.toString() || String(record.id);
};
