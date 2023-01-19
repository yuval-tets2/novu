import { NotificationCreateNestedManyWithoutCustomersInput } from "./NotificationCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  notifications?: NotificationCreateNestedManyWithoutCustomersInput;
};
