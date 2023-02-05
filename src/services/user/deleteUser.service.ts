import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import AppError from "../../errors/appError";

const deleteUserService = async (idUser: string) => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({ id: idUser });

  if (!user) throw new AppError("User not found", 404);

  await userRepository.delete(idUser);

  const response = {
    status: 204,
    message: "User deleted!",
  };

  return response;
};

export default deleteUserService;
