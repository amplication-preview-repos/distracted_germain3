import { SortOrder } from "../../util/SortOrder";

export type ReelOrderByInput = {
  createdAt?: SortOrder;
  createdBy?: SortOrder;
  creator?: SortOrder;
  description?: SortOrder;
  duration?: SortOrder;
  id?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
