import { compare } from "bcryptjs";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { ILoginUser } from "../../interfaces/users";
import AppError from "../../errors/appError";

const createSessionService = async (data: ILoginUser): Promise<string> => {
  const { email, password } = data;
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({
    email: email,
  });

  if (!user) throw new AppError("Invalid email or password", 400);

  const passwordMatch = await compare(password, user.password);

  if (!passwordMatch) throw new AppError("Invalid email or password", 400);

  const token = jwt.sign(
    {
      isAdm: user.isAdm,
    },
    process.env.SECRET_KEY as string,
    {
      expiresIn: "24h",
      subject: user.id,
    }
  );

  return token;
};

export default createSessionService;
