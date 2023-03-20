import IUser from "../interfaces/IUser";

export default class User {
  private id: string | undefined;
  private name: string;
  private email: string;
  private role: string;
  private password: string;

  constructor (user: IUser) {
    this.email = user.email;
    this.id = user.id;
    this.role = user.role;
    this.password = user.password;
    this.name = user.name;
  }

  getId () {
    return this.id;
  }

  setId (id: string) {
    this.id = id;
  }

  getName () {
    return this.name;
  }

  setName (name: string) {
    this.name = name;
  }

  getEmail () {
    return this.email;
  }

  setEmail (email: string) {
    return this.email;
  }

  getRole () {
    return this.role;
  }

  setRole (role: string) {
    this.role = role;
  };
}