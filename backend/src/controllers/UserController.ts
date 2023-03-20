import { NextFunction, Request, Response } from "express";
import IUser from "../interfaces/IUser";
import UserService from "../services/UserService";

export default class UserController {
  private UserService: UserService;
  private req: Request;
  private res: Response;
  private next: NextFunction;

  constructor (req: Request, res: Response, next: NextFunction) {
    this.UserService = new UserService();
    this.req = req;
    this.res = res;
    this.next = next;
  }

  public async register() {
    try {
      const userFields: IUser = {
        name: this.req.body.name,
        role: this.req.body.role,
        email: this.req.body.email,
        password: this.req.body.password,
      };

      const response = await UserService.register(userFields);
    } catch (error) {
      
    }
  };

  public async login() {

  }
}