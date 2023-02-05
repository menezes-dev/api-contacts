import { Request, Response } from "express";
import updateContactService from "../../services/contact/updateContact.service";

const updateContactController = async (req: Request, res: Response) => {
  const id = req.params.id;
  const data = req.body;
  const updatedContact = await updateContactService(data, id);

  return res.status(200).json(updatedContact);
};

export default updateContactController;
