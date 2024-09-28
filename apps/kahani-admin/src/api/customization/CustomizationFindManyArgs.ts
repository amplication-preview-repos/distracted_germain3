import { CustomizationWhereInput } from "./CustomizationWhereInput";
import { CustomizationOrderByInput } from "./CustomizationOrderByInput";

export type CustomizationFindManyArgs = {
  where?: CustomizationWhereInput;
  orderBy?: Array<CustomizationOrderByInput>;
  skip?: number;
  take?: number;
};
