import { NotificationUpdateManyWithoutCustomersInput } from "./NotificationUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  notifications?: NotificationUpdateManyWithoutCustomersInput;
};
