import { Customer } from "../customer/Customer";

export type Notification = {
  ack: boolean | null;
  createdAt: Date;
  customer?: Customer | null;
  id: string;
  message: string | null;
  updatedAt: Date;
};
