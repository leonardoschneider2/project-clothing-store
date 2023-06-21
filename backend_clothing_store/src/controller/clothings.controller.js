const {
  registerClothingService,
  getClothingsService,
  getClothingsByIdService,
} = require('../service/clothings.service');


const registerClothingController = async (req, res, next) => {
  try {
    const {
      userId,
      clothingName,
      clothingGroupId,
      price,
    } = req.body;

    const response = await registerClothingService();

    res.status(201).json({ ok: true });
  } catch (error) {
    next(error);
  }
};


const getClothingsController = async (req, res, next) => {
  try {
    const response = await getClothingsService();

    res.status(200).json({ ok: true });
  } catch (error) {
    next(error);
  }
};


const getClothingsByIdController = async (req, res, next) => {
  try {
    const { id } = req.params;

    const response = await getClothingsByIdService();

    res.status(200).json({ ok: true });
  } catch (error) {
    next(error);
  }
};


module.exports = {
  registerClothingController,
  getClothingsByIdController,
  getClothingsController,
}