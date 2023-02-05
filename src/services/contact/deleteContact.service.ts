import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import AppError from "../../errors/appError";

const deleteContactService = async (idContact: string) => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const contact = await contactRepository.findOneBy({ id: idContact });

  if (!contact) throw new AppError("Contact not found", 404);

  await contactRepository.delete(idContact);

  const response = {
    status: 204,
    message: "Contact deleted!",
  };

  return response;
};

export default deleteContactService;
