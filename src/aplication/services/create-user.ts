import { CreateUser, CreateUserParams } from "@/domain/usecases/create-user";
import { CreateUserRepository } from "../contracts/db/create-user";
import { InvalidUserParamsError } from "@/domain/errors/invalid-user-params";
import { User } from "@/domain/entities/user";

export class CreateUserService implements CreateUser {
  constructor(private readonly createUserRepository: CreateUserRepository) {}

  async create(user: CreateUserParams): Promise<User> {
    const userAge =
      new Date().getFullYear() - new Date(user.birthDate).getFullYear();

    if (userAge < 18) {
      throw new InvalidUserParamsError("User must be at least 18 years old");
    }

    const createdUser = await this.createUserRepository.create(user);

    return createdUser;
  }
}
