import { UserResult } from "./user";

type Address = {
  cep: string;
  street: string;
  complement: string;
  neighborhood: string;
  city: string;
  uf: string;
};

export type CreateUserRepositoryParams = {
  id: string;
  name: string;
  email: string;
  password: string;
  birthDate: Date;
  address: Address;
};

export interface CreateUserRepository {
  create: (user: CreateUserRepositoryParams) => Promise<UserResult>;
}
