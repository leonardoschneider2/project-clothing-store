const { registerAdminService, registerUserService } = require("../service/login.service");


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
      res.status(500).json({ error: error.message });
    }
}


const loginController = async (req, res, next) => {
    console.log("I'm creating the log in route.")
}


module.exports = {
  registerController,
  loginController,
}
