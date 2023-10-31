import { User } from "../entities/user";

export type CreateUserParams = {
  name: string;
  email: string;
  password: string;
  birthDate: Date;
};

export interface CreateUser {
  create: (user: CreateUserParams) => Promise<User>;
}
