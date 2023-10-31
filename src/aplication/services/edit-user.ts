import { EditUser, EditUserParams } from "@/domain/usecases/edit-user";
import { EditUserRepository } from "../contracts/db/edit-user";
import { User } from "@/domain/entities/user";

export class EditUserService implements EditUser {
  constructor(private readonly editUserRepository: EditUserRepository) {}

  async edit(user: EditUserParams): Promise<User> {
    const editedUser = await this.editUserRepository.edit(user);

    return editedUser;
  }
}
