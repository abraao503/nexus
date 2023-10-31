import {
  CreateUserRepository,
  CreateUserRepositoryParams,
} from "@/aplication/contracts/create-user";
import {
  EditUserRepository,
  EditUserRepositoryParams,
} from "@/aplication/contracts/edit-user";
import { ListUsersRepository } from "@/aplication/contracts/db/list-users";
import { UserModel } from "@/aplication/models/user";
import { PostgresHelper } from "./postgres-helper";

export class UsersPostgresRepository
  implements CreateUserRepository, ListUsersRepository, EditUserRepository
{
  async list(): Promise<UserModel[]> {
    const users = await PostgresHelper.query("SELECT * FROM users");

    return users;
  }

  async create(user: CreateUserRepositoryParams): Promise<UserModel> {
    const [createdUser] = await PostgresHelper.query(
      `INSERT INTO users (name, email, birth_date) VALUES ('${user.name}', '${user.email}', '${user.birthDate}') RETURNING *`
    );

    return createdUser;
  }

  async edit(user: EditUserRepositoryParams): Promise<void> {
    await PostgresHelper.query(
      `UPDATE users SET name = '${user.name}', email = '${user.email}', birth_date = '${user.birth_date}' WHERE id = '${user.id}'`
    );
  }
}
