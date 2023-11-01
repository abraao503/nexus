import {
  CreateUserRepository,
  CreateUserRepositoryParams,
} from "@/aplication/contracts/db/create-user";
import {
  EditUserRepository,
  EditUserRepositoryParams,
} from "@/aplication/contracts/db/edit-user";
import { ListUsersRepository } from "@/aplication/contracts/db/list-users";
import { PostgresHelper } from "./postgres-helper";
import { UserResult } from "@/aplication/contracts/db/user";

type CreateUserResult = {
  id: string;
  name: string;
  email: string;
  birth_date: Date;
  password: string;
};

type listUsersResult = CreateUserResult;

export class UsersPostgresRepository
  implements CreateUserRepository, ListUsersRepository, EditUserRepository
{
  async list(): Promise<UserResult[]> {
    const users = (await PostgresHelper.query(
      "SELECT * FROM users"
    )) as listUsersResult[];

    return users.map((user) => ({
      ...user,
      birthDate: user.birth_date,
    }));
  }

  async create(userData: CreateUserRepositoryParams): Promise<UserResult> {
    const { address, ...user } = userData;

    const userCreated = await PostgresHelper.transaction(async () => {
      const [userCreated] = (await PostgresHelper.query(
        `INSERT INTO addresses (id, cep, street, complement, neighborhood, city, uf) VALUES ('${user.id}', '${address.cep}', '${address.street}', '${address.complement}', '${address.neighborhood}', '${address.city}', '${address.uf}')`
      )) as CreateUserResult[];

      await PostgresHelper.query(
        `INSERT INTO users (id, name, email, birth_date, password) VALUES ('${userCreated.id}', '${user.name}', '${user.email}', '${user.birthDate}', '${user.password}')`
      );

      return userCreated;
    });

    return {
      ...userCreated,
      birthDate: userCreated.birth_date,
    };
  }

  async editById(id: string, user: EditUserRepositoryParams): Promise<void> {
    await PostgresHelper.query(
      `UPDATE users SET name = '${user.name}', email = '${user.email}', birth_date = '${user.birthDate}' WHERE id = '${id}'`
    );
  }
}
