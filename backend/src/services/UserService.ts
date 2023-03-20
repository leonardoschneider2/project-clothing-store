export default class UserService {
  private model: UserModelORM;

  constructor() {
    this.model = new UserModelORM();
  }
} 