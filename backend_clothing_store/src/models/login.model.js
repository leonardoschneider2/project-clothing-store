const { users: Users } = require('../database/models');

registerModel = async ({
  email,
  password,
  name,
  role,
}) => {
  try {
    const user = await Users.findAll({})

    console.log(user)

    return;
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = {
  registerModel,
}