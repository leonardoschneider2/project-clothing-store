const { registerModel } = require("../models/login.model");

registerUserService = async ({
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


registerAdminService = async ({
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


module.exports = {
  registerUserService,
  registerAdminService,
}