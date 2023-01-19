import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type NotificationCreateInput = {
  ack?: boolean | null;
  customer?: CustomerWhereUniqueInput | null;
  message?: string | null;
};
