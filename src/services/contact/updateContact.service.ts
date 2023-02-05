import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import AppError from "../../errors/appError";
import { IUpdateContact } from "../../interfaces/contacts";

const updateContactService = async (
  data: IUpdateContact,
  idContact: string
): Promise<Contact> => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const contact = await contactRepository.findOneBy({ id: idContact });

  if (!contact) throw new AppError("Contact not found!", 404);

  await contactRepository.update(idContact, {
    email: data.email ? data.email : contact.email,
    name: data.name ? data.name : contact.name,
    phone: data.phone ? data.phone : contact.phone,
  });

  const updatedContact = await contactRepository.findOneBy({ id: idContact });

  return updatedContact!;
};

export default updateContactService;
