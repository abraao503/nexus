import { UserResult } from "./user";

export type EditUserRepositoryParams = {
  name?: string;
  email?: string;
  birthDate?: Date;
  password?: string;
};

export interface EditUserRepository {
  edit: (user: EditUserRepositoryParams) => Promise<UserResult>;
}
