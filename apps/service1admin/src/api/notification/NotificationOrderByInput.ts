import { SortOrder } from "../../util/SortOrder";

export type NotificationOrderByInput = {
  ack?: SortOrder;
  createdAt?: SortOrder;
  customerId?: SortOrder;
  id?: SortOrder;
  message?: SortOrder;
  updatedAt?: SortOrder;
};
