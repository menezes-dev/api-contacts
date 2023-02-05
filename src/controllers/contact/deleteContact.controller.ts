import { Request, Response } from "express";
import deleteContactService from "../../services/contact/deleteContact.service";

const deleteContactController = async (req: Request, res: Response) => {
  const id = req.params.id;

  const deletedContact = await deleteContactService(id);

  return res
    .status(deletedContact.status)
    .json({ message: deletedContact.message });
};

export default deleteContactController;
