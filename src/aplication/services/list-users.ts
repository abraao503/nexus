import { User } from "@/domain/entities/user";
import { ListUsers } from "@/domain/usecases/list-users";
import { ListUsersRepository } from "../contracts/db/list-users";

export class ListUsersService implements ListUsers {
  constructor(private readonly listUserRepository: ListUsersRepository) {}

  async list(): Promise<User[]> {
    return this.listUserRepository.list();
  }
}
