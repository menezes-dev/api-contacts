import AppDataSource from "../../data-source";
import AppError from "../../errors/appError";
import { User } from "../../entities/user.entity";
import { hash } from "bcryptjs";
import { ICreateUser } from "../../interfaces/users";

const createUserService = async (userData: ICreateUser): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);

  const verifyEmail = await userRepository.findOneBy({
    email: userData.email,
  });

  if (verifyEmail) throw new AppError("Email já existe", 403);
  if (!userData.password) throw new AppError("A senha é requerida");

  const hashedPwd = await hash(userData.password, 10);

  const newUser = userRepository.create({
    email: userData.email,
    password: hashedPwd,
    name: userData.name,
    phone: userData.phone,
    isAdm: userData.isAdm,
  });

  await userRepository.save(newUser);

  return newUser;
};

export default createUserService;
