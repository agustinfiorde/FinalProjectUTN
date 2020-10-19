const { User, Dog } = require('./../models/index');

exports.getAll = () => User.findAll({ where: { "active": true } });

exports.getAllUsersAndDogs = () => User.findAll({
    where: { active: true },
    attributes: {
        exclude: ['createdAt', 'updatedAt']
    },
    include: {
        model: Dog,
        where: { active: true },
        attributes: {
            exclude: ['createdAt', 'updatedAt']
        },
    }
});

exports.findById = (id) => User.findAll({ where: { "id": id, "active": true } });

exports.save = (obj) => User.create(obj);

exports.update = (id, obj) => User.update(obj, { where: { "id": id, "active": true } });

exports.deleteMethod = (id, obj) => {
    obj.active = false;
    return User.update(obj, { where: { "id": id, "active": true } });
};