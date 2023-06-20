const { users: Users } = require('../database/models');

registerModel = async ({
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

    console.log(user.dataValues)

    return;
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = {
  registerModel,
}