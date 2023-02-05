import { Request, Response } from "express";
import { ILoginUser } from "../../interfaces/users";
import createSessionService from "../../services/session/createSession.service";

const createSessionController = async (req: Request, res: Response) => {
  const data = req.body;
  const token = await createSessionService(data);

  return res.status(200).json({ token });
};

export default createSessionController;
