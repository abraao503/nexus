import { CreateUser } from "@/domain/usecases/create-user";
import { Controller } from "../contracts/controller";
import { HttpResponse } from "../contracts/http";
import { Validation } from "../contracts/validation";
import {
  badRequest,
  serverError,
  ok,
} from "@/presentation/helpers/http-helper";

type Address = {
  cep: string;
  street: string;
  number: number;
  complement: string;
  neighborhood: string;
};

export type CreateUserRequest = {
  name: string;
  email: string;
  password: string;
  address: Address;
  birthDate: string;
};

export class CreateUserController implements Controller {
  constructor(
    private readonly createUser: CreateUser,
    private readonly validation: Validation
  ) {}

  async handle(request: CreateUserRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(request);

      if (error) {
        return badRequest(error);
      }

      const createdUser = await this.createUser.create({
        ...request,
        birthDate: new Date(request.birthDate),
      });

      return ok(createdUser);
    } catch (error) {
      if (error instanceof Error) {
        return serverError(error);
      }

      return serverError(new Error());
    }
  }
}
