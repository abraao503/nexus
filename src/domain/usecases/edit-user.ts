import { User } from "../entities/user";

export type EditUserParams = {
  name?: string;
  email?: string;
  birthDate?: Date;
  password?: string;
};

export interface EditUser {
  edit: (user: EditUserParams) => Promise<User>;
}
