import { Request, Response } from "express";
import updateUserService from "../../services/user/updateUser.service";
const updateUserController = async (req: Request, res: Response) => {
  const data = req.body;
  const id = req.params.id;

  const updatedUser = await updateUserService(id, data);

  return res.status(200).json(updatedUser);
};

export default updateUserController;
