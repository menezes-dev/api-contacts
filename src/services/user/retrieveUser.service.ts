import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import AppError from "../../errors/appError";

const retrieveUserService = async (idUser: string): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({
    id: idUser,
  });

  if (!user) throw new AppError("Usuário não encontrado", 404);

  return user;
};

export default retrieveUserService;
