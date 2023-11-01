import { CreateUser, CreateUserParams } from "@/domain/usecases/create-user";
import { CreateUserRepository } from "../contracts/db/create-user";
import { InvalidUserParamsError } from "@/domain/errors/invalid-user-params";
import { User } from "@/domain/entities/user";
import { GetAddressByCep } from "../contracts/external/getAddressByCep";
import { Hasher } from "../contracts/cryptography/hasher";
import { UuidGenerator } from "../contracts/uuid/uuidGenerator";

export class CreateUserService implements CreateUser {
  constructor(
    private readonly createUserRepository: CreateUserRepository,
    private readonly getAddressByCep: GetAddressByCep,
    private readonly hasher: Hasher,
    private readonly uuidGenerator: UuidGenerator
  ) {}

  async create(userData: CreateUserParams): Promise<User> {
    const { address, ...user } = userData;

    const userAge =
      new Date().getFullYear() - new Date(user.birthDate).getFullYear();

    if (userAge < 18) {
      throw new InvalidUserParamsError("User must be at least 18 years old");
    }

    const addressResponse = await this.getAddressByCep.getAddressByCep(
      address.cep
    );

    if (addressResponse.uf !== "AM") {
      throw new InvalidUserParamsError("User must be from AM");
    }

    const userId = await this.uuidGenerator.generate();
    const hashedPassword = await this.hasher.hash(user.password);

    const userToBeCreated = {
      ...user,
      id: userId,
      password: hashedPassword,
      address: {
        ...address,
        city: addressResponse.city,
        uf: addressResponse.uf,
      },
    };

    const createdUser = await this.createUserRepository.create(userToBeCreated);

    return createdUser;
  }
}
