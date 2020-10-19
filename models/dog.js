'use strict';

const Enum = require('./../constants');

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dog extends Model {
    static associate(models) {
      //OneToMany
      Dog.hasMany(models.Product, { as: 'dogs', foreignKey: 'dogId' });
    }
  };
  Dog.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    nickName: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    breed: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    placeOfBreed: {
      type: DataTypes.STRING(64),
    },
    dni: {
      type: DataTypes.STRING(16),
      allowNull: false,
      unique: true
    },
    dateOfBirth: {
      allowNull: false,
      type: DataTypes.DATE,
      allowNull: false
    },
    gender: {
      type: DataTypes.ENUM,
      values: Object.values(Enum.genders),
      allowNull: false
    },
    country: {
      type: DataTypes.STRING(16),
    },
    province: {
      type: DataTypes.STRING(16),
    },
    provincePlace: {
      type: DataTypes.STRING(16),
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: 1
    }
  }, {
    sequelize,
    modelName: 'Dog',
  });
  return Dog;
};