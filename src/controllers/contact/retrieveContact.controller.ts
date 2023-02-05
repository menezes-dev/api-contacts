import { Request, Response } from "express";
import retrieveContactService from "../../services/contact/retrieveContact.service";
import retrieveuserService from "../../services/user/retrieveUser.service";

const retrieveContactController = async (req: Request, res: Response) => {
  const id = req.params.id;
  const contact = await retrieveContactService(id);

  return res.status(200).json(contact);
};

export default retrieveContactController;
