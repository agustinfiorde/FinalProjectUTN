const { Dog } = require('./../models/index');

const UserService = require('./user.service');

exports.save = async (obj) => {
    try {

        const user = UserService.findById(obj.idUser);

        if (Boolean(user)) {
            return await Dog.create(obj);
        } else {
            return "Algun problema";
        }
    } catch (e) {
        return e;
    }
};

exports.getAll = () => Dog.findAll();

exports.findById = (id) => Dog.findAll({ where: { "id": id } });

exports.update = (id, obj) => Dog.update(obj, { where: { "id": id } });

exports.deleteMethod = (id, obj) => {
    obj.active = false;
    return Dog.update(obj, { where: { "id": id } });
};