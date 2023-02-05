import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { User } from "../../entities/user.entity";

const listContactsService = async (idUser: string): Promise<Contact[]> => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const userRepository = AppDataSource.getRepository(User);

  const userGet = await userRepository.findOneBy({ id: idUser });

  console.log(userGet);

  const listContacts = await contactRepository.findBy({
    user: {
      id: idUser,
    },
  });

  return listContacts;
};

export default listContactsService;
