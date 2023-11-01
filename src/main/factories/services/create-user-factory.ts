import { CreateUserService } from "@/aplication/services/create-user";
import { UsersPostgresRepository } from "@/infra/db/postgres/usersPostgresRepository";
import { BcryptAdapter } from "@/infra/cryptography/bcrypt-adapter";
import { ViaCepAdapter } from "@/infra/api/via-cep-adapter";
import { AxiosAdapter } from "@/infra/http/axios-adapter";
import { CryptoAdapter } from "@/infra/uuid/crypto-adapter";
import { CreateUser } from "@/domain/usecases/create-user";

export const makeCreateUserService = (): CreateUser => {
  const salt = 8;

  const usersPostgresRepository = new UsersPostgresRepository();
  const getAdapter = new AxiosAdapter();
  const getAddressByCepAdapter = new ViaCepAdapter(getAdapter);
  const bcryptAdapter = new BcryptAdapter(salt);
  const uuidAdapter = new CryptoAdapter();

  return new CreateUserService(
    usersPostgresRepository,
    getAddressByCepAdapter,
    bcryptAdapter,
    uuidAdapter
  );
};
