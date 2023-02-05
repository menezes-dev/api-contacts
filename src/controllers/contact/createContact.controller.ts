import { Request, Response } from "express";
import createContactService from "../../services/contact/createContact.service";

const createContactController = async (req: Request, res: Response) => {
  const id = req.user.id;
  const data = req.body;

  const createdContact = await createContactService(data, id);

  return res.status(201).json(createdContact);
};

export default createContactController;
