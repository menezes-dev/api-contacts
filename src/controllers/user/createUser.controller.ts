import { ICreateUser } from "../../interfaces/users";
import createUserService from "../../services/user/createUser.service";
import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";

const createUserController = async (req: Request, res: Response) => {
  const user: ICreateUser = req.body;
  const createdUser = await createUserService(user);
  return res.status(201).json(instanceToPlain(createdUser));
};

export default createUserController;
