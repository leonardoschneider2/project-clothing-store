import { Request,Response, NextFunction } from "express";

const ErrorHandler = (error: Error, _req: Request, _res: Response, next: NextFunction) => {
  console.log(error);
  next(error);
};

export default ErrorHandler;