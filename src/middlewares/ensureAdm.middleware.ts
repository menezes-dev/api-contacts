import { Request, Response, NextFunction } from "express";

const ensureAdmMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.user.isAdm) {
    return res.status(403).json({
      message: "Not ADM!",
    });
  }

  return next();
};

export default ensureAdmMiddleware;
