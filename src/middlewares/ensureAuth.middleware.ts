import { Request, Response, NextFunction } from "express";
import jwt, { decode } from "jsonwebtoken";

const ensureAuthMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      message: "Missing token!",
    });
  }

  token = token.split(" ")[1];

  jwt.verify(token, process.env.SECRET_KEY as string, (error, decoded: any) => {
    if (error) {
      return res.status(401).json({
        message: "Invalid Token",
      });
    }

    req.user = {
      isAdm: decoded.isAdm,
      id: decoded.sub,
    };

    return next();
  });
};

export default ensureAuthMiddleware;
