import { Request, Response } from "express";
import listContactsService from "../../services/contact/listContacts.service";
import { instanceToPlain } from "class-transformer";

const listContactsController = async (req: Request, res: Response) => {
  const id = req.user.id;
  const listContacts = await listContactsService(id);

  return res.status(200).json(instanceToPlain(listContacts));
};

export default listContactsController;
