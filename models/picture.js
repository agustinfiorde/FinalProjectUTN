'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Picture extends Model {
    static associate(models) {
      //ManyToOne
      Picture.belongsToMany(models.Dog, {
        through: "dogs_pictures",
        foriegnKey: 'dogId',
        as: 'dogs',
        timestamps: false
      });
      //OneToOne
      Picture.hasOne(models.User, { foreignKey: 'pictureId' });
    }
  };
  Picture.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    directory: DataTypes.STRING,
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: 1
    }

  }, {
    sequelize,
    modelName: 'Picture',
  });
  return Picture;
};