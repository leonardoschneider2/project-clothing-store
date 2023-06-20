const { registerAdminService, registerUserService, loginService } = require("../service/login.service");


const registerController = async (req, res, next) => {
    console.log("I'm creating the register route.");
    try {
      const { email, password, name, role } = req.body;
      const { validation } = req.headers;

      switch(role) {
        case 'admin':
          await registerAdminService({
            email,
            password,
            name,
            validation,
          });
          break;
        default:
          await registerUserService({
            email,
            password,
            name,
          });
      }

      return res.status(201).json("User successfully registered.")
    } catch (error) {
      next(error);
    }
}


const loginController = async (req, res, next) => {
    try {
      const { email, password } = req.body;

      const response = await loginService({
        email,
        password,
      });

      console.log("response Login Controller: ", response);
      return res.status(200).json({ token: 'ASHIBATADA' });
    } catch (error) {
      next(error);
    }
}


module.exports = {
  registerController,
  loginController,
}
