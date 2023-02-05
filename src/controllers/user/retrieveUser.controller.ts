import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";
import retrieveUserService from "../../services/user/retrieveUser.service";

const retrieveUserController = async (req: Request, res: Response) => {
  const idUser = req.params.id;
  const user = await retrieveUserService(idUser);

  return res.status(200).json(instanceToPlain(user));
};

export default retrieveUserController;
