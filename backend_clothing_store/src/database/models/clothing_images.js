'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class clothing_images extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  clothing_images.init({
    name: DataTypes.STRING,
    clothingId: DataTypes.INTEGER,
    pathImage: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'clothing_images',
    timestamps: true,
    updatedAt: 'updateTimestamp',
    underscored: true,
  });
  return clothing_images;
};