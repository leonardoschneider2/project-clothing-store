const { users: Users } = require('../database/models');

const registerModel = async ({
  email,
  password,
  name,
  role,
}) => {
  try {
    const user = await Users.create({
      email,
      password,
      name,
      role,
    });

    console.log(user.dataValues);

    return;
  } catch (error) {
    throw new Error(error)
  }
};


const loginModel = async ({
  password,
  email,
}) => {
  try {
    const { dataValues: user } = await Users.findOne({ where: { email }});

    if (user.password === password) {
      console.log("right access!");
      return {
        name: user.name,
        email: user.email,
        role: user.role,
      };
    } else {
      throw new Error("User or password inválid!");
    }

  } catch (error) {
    throw new Error(error);
  }
};


module.exports = {
  registerModel,
  loginModel,
}