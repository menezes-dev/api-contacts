import { Request, Response } from "express";
import deleteUserService from "../../services/user/deleteUser.service";

const deleteUserController = async (req: Request, res: Response) => {
  const id = req.params.id;
  const deletedUser = await deleteUserService(id);

  return res.status(deletedUser.status).json({ message: deletedUser.message });
};

export default deleteUserController;
