const { User, Dog } = require('./../models/index');
const { sequelize } = require('../utils/constants');

exports.getAll = () => User.findAll({
    where: { isActive: true },
    attributes: {
        exclude: sequelize.attributesToExcludeUser
    }
});

exports.getAllUsersAndDogsRegistered = () => User.findAll({
    where: { active: true },
    attributes: {
        exclude: sequelize.attributesToExcludeUser
    },
    include: {
        model: Dog,
        as: 'managers',
        where: { isActive: true },
        attributes: {
            exclude: sequelize.attributesToExcludeDog
        },
    }
});

exports.findById = (id) => User.findByPk(id);

exports.save = (obj) => User.create(obj);

exports.update = (id, obj) => User.update(obj, { where: { id } });

exports.deleteMethod = (id, obj) => {
    obj["isActive"] = false;
    return User.update(obj, { where: { "id": id, isActive: true } });
};