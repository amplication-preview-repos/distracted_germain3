import { TextInput as TTextInput } from "../api/textInput/TextInput";

export const TEXTINPUT_TITLE_FIELD = "associatedReel";

export const TextInputTitle = (record: TTextInput): string => {
  return record.associatedReel?.toString() || String(record.id);
};
