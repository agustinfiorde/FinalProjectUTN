'use strict';

const Enum = require('./../constants');

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    static associate(models) {

      //OneToMany
      User.hasMany(models.Dog, {
        foreignKey: 'userId',
        onUpdate: 'cascade',
        onDelete: 'cascade'
      });

    }

  };
  User.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING(64),
      allowNull: false,
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
    rol: {
      type: DataTypes.ENUM,
      values: Object.values(Enum.roles),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(32),
      allowNull: false,
      unique: true
    },
    uuidEmail: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    password: {
      type: DataTypes.STRING(64),
      allowNull: false,
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
      defaultValue: 0
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};