import { Request, Response, NextFunction } from "express";

const ensureAdmOrOwnerMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const isOwner = req.user.id === req.params.id;

  if (!isOwner && !req.user.isAdm) {
    return res.status(403).json({
      message: "Not adm or Owner!",
    });
  }

  return next();
};

export default ensureAdmOrOwnerMiddleware;
