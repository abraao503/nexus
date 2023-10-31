import { UserResult } from "./user";

export interface ListUsersRepository {
  list: () => Promise<UserResult[]>;
}
