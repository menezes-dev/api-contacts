import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { User } from "../../entities/user.entity";
import { ICreateContact } from "../../interfaces/contacts";

const createContactService = async (
  data: ICreateContact,
  idUser: string
): Promise<Contact> => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ id: idUser });

  const newContact = contactRepository.create({
    email: data.email,
    name: data.name,
    phone: data.phone,
    user: user!,
  });

  await contactRepository.save(newContact);

  return newContact;
};

export default createContactService;
