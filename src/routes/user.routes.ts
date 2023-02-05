import { Router } from "express";
import createUserController from "../controllers/user/createUser.controller";
import deleteUserController from "../controllers/user/deleteUser.controller";
import listUsersController from "../controllers/user/listUsers.controllers";
import retrieveUserController from "../controllers/user/retrieveUser.controller";
import updateUserController from "../controllers/user/updateUser.controller";
import ensureAdmMiddleware from "../middlewares/ensureAdm.middleware";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureAdmOrOwnerMiddleware from "../middlewares/ensureAdmOrOwner.middleware";

const userRoutes = Router();

userRoutes.post("", createUserController);
userRoutes.get(
  "",
  ensureAuthMiddleware,
  ensureAdmMiddleware,
  listUsersController
);
userRoutes.get(
  "/:id",
  ensureAuthMiddleware,
  ensureAdmOrOwnerMiddleware,
  retrieveUserController
);
userRoutes.patch(
  "/:id",
  ensureAuthMiddleware,
  ensureAdmOrOwnerMiddleware,
  updateUserController
);
userRoutes.delete(
  "/:id",
  ensureAuthMiddleware,
  ensureAdmOrOwnerMiddleware,
  deleteUserController
);

export default userRoutes;
