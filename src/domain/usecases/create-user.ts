import { User } from "../entities/user";

type Address = {
  cep: string;
  street: string;
  number: number;
  complement: string;
  neighborhood: string;
};

export type CreateUserParams = {
  name: string;
  email: string;
  password: string;
  birthDate: Date;
  address: Address;
};

export interface CreateUser {
  create: (user: CreateUserParams) => Promise<User>;
}
