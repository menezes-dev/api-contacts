import { hash } from "bcryptjs";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import AppError from "../../errors/appError";
import { IUpdateUser } from "../../interfaces/users";

const updateUserService = async (
  idUser: string,
  data: IUpdateUser
): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({
    id: idUser,
  });

  if (!user) throw new AppError("User not found", 404);

  await userRepository.update(idUser, {
    email: data.email ? data.email : user.email,
    password: data.password ? await hash(data.password, 10) : user.password,
    name: data.name ? data.name : user.name,
    phone: data.phone ? data.phone : user.phone,
  });

  const userUpdated = await userRepository.findOneBy({ id: idUser });

  return userUpdated!;
};

export default updateUserService;
