import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type NotificationUpdateInput = {
  ack?: boolean | null;
  customer?: CustomerWhereUniqueInput | null;
  message?: string | null;
};
