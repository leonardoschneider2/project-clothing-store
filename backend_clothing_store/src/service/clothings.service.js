const {
  registerClothingModel,
  registerClothingImageModel,
  getClothingsModel,
  getClothingsByIdModel,
} = require("../models/clothings.models");


const registerClothingService = async ({
  userId,
  clothingName,
  clothingGroupId,
  price,
}) => {
  try {
    const { dataValues: clothing } = registerClothingModel({
      userId,
      clothingName,
      clothingGroupId,
      price,
    });

    /* const images =  */registerClothingImageModel({ id: clothing.id });

    const response = getClothingsByIdModel({ id: clothing.id });

    return response;

  } catch (error) {
    throw new Error(error);
  }
};


const getClothingsService = async () => {
  try {
    const clothings = getClothingsModel()
  } catch (error) {
    throw new Error(error);
  }
};


const getClothingsByIdService = async ({ id }) => {
  try {
    const clothing = getClothingsByIdModel({ id });
  } catch (error) {
    throw new Error(error);
  }
};


module.exports = {
  registerClothingService,
  getClothingsByIdService,
  getClothingsService,
};
