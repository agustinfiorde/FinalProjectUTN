const DogService = require('./../services/dog.service');

const obj = {
    id: String,
    nickName: String,
    breed: String,
    placeOfBreed: String,
    dni: String,
    dateOfBirth: Date,
    gender: String,
    country: String,
    province: String,
    provindePlace: String,
    isActive: Boolean,
    createdAt: Date,
    updatedAt: Date,
    registeredBy: String,
    userId: String
};

exports.getAll = (req, res) =>
    DogService.getAll()
        .then(response => res.json(response))
        .catch(e => res.status(500).json(e));
;

exports.getOne = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await DogService.findById(id);
        res.json(result);
    } catch (e) {
        res.status(500).json(e);
    }
};

exports.create = (req, res) => {

    const obj = req.body;

    DogService.save(obj)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tutorial."
            });
        });
};

exports.update = async (req, res) => {
    try {
        const { id } = req.params;
        const obj = req.body;
        const result = await DogService.update(id, obj);
        res.json(result);
    } catch (e) {
        res.status(500).json(e);
    }
};

exports.deleteController = async (req, res) => {
    try {
        const { id } = req.params;
        const obj = req.body;
        obj.active = false;
        const result = await DogService.deleteMethod(id, obj);
        res.json(result);
    } catch (e) {
        res.status(500).json(e);
    }
};