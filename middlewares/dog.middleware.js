const { schemasDog } = require('./schemas/dog');

const validateCreate = (req, res, next) => {
    const { error, values } = schemasDog.create.validate(req.body);
    error ? res.status(422).json({ message: error.details[0].message }) : next();
}

const validateUpdate = (req, res, next) => {
    const { error, values } = schemasDog.modify.validate(req.body);
    error ? res.status(422).json({ message: error.details[0].message }) : next();
}

module.exports = { validateCreate, validateUpdate };