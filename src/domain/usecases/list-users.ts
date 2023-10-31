import { User } from "../entities/user";

export interface ListUsers {
  list: () => Promise<User[]>;
}
