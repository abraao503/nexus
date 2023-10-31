import { UserResult } from "./user";

export type CreateUserRepositoryParams = {
  name: string;
  email: string;
  password: string;
  birthDate: Date;
};

export interface CreateUserRepository {
  create: (user: CreateUserRepositoryParams) => Promise<UserResult>;
}
