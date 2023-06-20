const { registerModel, loginModel } = require("../models/login.model");

const registerUserService = async ({
  email,
  password,
  name,
}) => {
  try {
    // transform password

    // calls model
    await registerModel({
      email,
      password,
      name,
      role: 'user',
    })

    return;
  } catch (error) {
    throw new Error(error)
  }
};


const registerAdminService = async ({
  email,
  password,
  name,
  validation,
}) => {
  try {
    // validate

    // transform password to hash

    // calls model
    await registerModel({
      email,
      password,
      name,
      role: 'admin',
    });

    return;
  } catch (error) {
    throw new Error(error)
  }
};


const loginService = async ({
  email,
  password,
}) => {
  try {
    const response = await loginModel({
      email,
      password,
    });
  
    // creating jwt

    // returning jwt
    return { token: 'JWT not running yet.' };
  } catch (error) {
    throw new Error(error);
  }
}


module.exports = {
  registerUserService,
  registerAdminService,
  loginService,
}