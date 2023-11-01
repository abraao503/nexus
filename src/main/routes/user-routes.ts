import { adaptRoute } from "@/main/adapters/express-route-adapter";
import { makeCreateUserController } from "../factories/controllers/create-user-controller-factory";

import { Router } from "express";

export default (router: Router): void => {
  router.post("/users", adaptRoute(makeCreateUserController()));
};
