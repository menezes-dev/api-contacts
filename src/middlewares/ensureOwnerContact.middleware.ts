import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import { Contact } from "../entities/contact.entity";

const ensureOwnerContact = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const idUser = req.user.id;
  const idContact = req.params.id;

  const contactRepository = AppDataSource.getRepository(Contact);
  const contact = await contactRepository.findOneBy({ id: idContact });

  if (contact?.user.id !== idUser) {
    return res.status(403).json({
      message: "Not owner!",
    });
  }

  return next();
};

export default ensureOwnerContact;
