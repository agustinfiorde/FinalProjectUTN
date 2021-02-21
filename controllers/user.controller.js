const UserService = require('../services/user.service');
const sha1 = require('sha1');
const { createToken, verifyToken } = require('../utils/token');
const { send } = require('../utils/notification');

const obj = {
    id: String,
    name: String,
    lastName: String,
    dni: String,
    rol: String,
    dateOfBirth: Date,
    email: String,
    password: String,
    gender: String,
    password: String,
    country: String,
    province: String,
    provincePlace: String,
    isActive: Boolean,
    createdAt: Date,
    updatedAt: Date
};

exports.getAll = (req, res) =>
    UserService.getAll()
        .then(response => res.json(response))
        .catch(e => res.status(500).json(e));

exports.getAllUsersAndDogs = (req, res) =>
    UserService.getAllUsersAndDogs()
        .then(response => res.json(response))
        .catch(e => res.status(500).json(e));

exports.getOne = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await UserService.findById(id);
        res.json(result);
    } catch (e) {
        res.status(500).json(e);
    }
};

exports.createUser = async (req, res) => {
    try {
        const obj = req.body;
        obj.password = sha1(obj.password);
        const resp = await UserService.save(obj);
        const token = createToken({ uuidEmail: resp.uuidEmail });
        const respEmail = await send(obj.email, token, resp.id, "register");
        res.status(200).json({ resp, token, respEmail })
    } catch (error) {
        res.status(500).json(error);
    }


};

exports.updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const obj = req.body;
        const result = await UserService.update(id, obj);
        res.json(result);
    } catch (e) {
        res.status(500).json(e);
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const obj = req.body;

        if (id == obj.id) {
            const result = await UserService.deleteMethod(id, obj);
            res.json(result);
        } else {
            res.status(500).json({ message: "Los id no coinciden" });
        }
    } catch (e) {
        res.status(500).json(e);
    }
};

exports.confirmEmail = async (req, res) => {
    const token = req.query.token;
    const id = req.query.id;
    try {
        const { uuidEmail } = verifyToken(token);
        const obj = await UserService.findById(id);

        if (!obj) {
            res.json({ message: "No existe el usuario" });
        }

        if (uuidEmail == obj.uuidEmail) {
            try {
                const [resp] = await UserService.update(obj.id, { isActive: true });
                res.json({ message: "Bienvenido!!!" });
            } catch (error) {
                res.status(500).json(error);
            }
        } else {
            res.json({ message: "No coinciden el uidCorreo con el de la URL" });
        }
    } catch (e) {
        res.status(500).json(e);
    }
}



const { imgFile } = require('../utils/fileHandler');

exports.test = async (req, res) => {
    try {

        res.json({ message: "No coinciden el uidCorreo con el de la URL" });
    } catch (e) {
        res.status(500).json(e);
    }
};