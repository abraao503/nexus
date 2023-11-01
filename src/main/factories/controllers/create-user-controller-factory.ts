import { Controller } from "@/presentation/contracts/controller";
import { CreateUserController } from "@/presentation/controllers/create-user-controller";
import { makeCreateUserService } from "../services/create-user-factory";
import { makeCreateUserValidation } from "./create-user-validation-factory";

export const makeCreateUserController = (): Controller => {
  const controller = new CreateUserController(
    makeCreateUserService(),
    makeCreateUserValidation()
  );

  return controller;
};
