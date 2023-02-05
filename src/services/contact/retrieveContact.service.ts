import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import AppError from "../../errors/appError";

const retrieveContactService = async (idContact: string): Promise<Contact> => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const contact = await contactRepository.findOneBy({ id: idContact });

  if (!contact) throw new AppError("Contact not found!", 404);

  return contact;
};

export default retrieveContactService;
