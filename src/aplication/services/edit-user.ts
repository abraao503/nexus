import { EditUser, EditUserParams } from "@/domain/usecases/edit-user";
import { EditUserRepository } from "../contracts/db/edit-user";

export class EditUserService implements EditUser {
  constructor(private readonly editUserRepository: EditUserRepository) {}

  async edit(id: string, user: EditUserParams): Promise<void> {
    await this.editUserRepository.editById(id, user);
  }
}
