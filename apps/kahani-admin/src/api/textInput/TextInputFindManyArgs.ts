import { TextInputWhereInput } from "./TextInputWhereInput";
import { TextInputOrderByInput } from "./TextInputOrderByInput";

export type TextInputFindManyArgs = {
  where?: TextInputWhereInput;
  orderBy?: Array<TextInputOrderByInput>;
  skip?: number;
  take?: number;
};
