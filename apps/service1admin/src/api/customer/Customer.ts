import { Notification } from "../notification/Notification";

export type Customer = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  notifications?: Array<Notification>;
  updatedAt: Date;
};
