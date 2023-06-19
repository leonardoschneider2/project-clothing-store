const registerController = (req, res, next) => {
    console.log("I'm creating the register route.");
}

const loginController = (req, res, next) => {
    console.log("I'm creating the log in route.")
}

module.exports = {
  registerController,
  loginController,
}
