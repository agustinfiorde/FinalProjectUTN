const Joi = require("@hapi/joi");
const Enum = require('../../../../perromaniaTests/constants');

const messageString = {
    "any.string": "El campo es obligatorio",
    "string.min": "Como minimo deberia tener 2 caracteres",
    "string.max": "Se excedio de los 30 caracteres"
};

const messageDni = {
    "any.string": "El campo es obligatorio",
    "string.min": "Como minimo deberia tener 8 caracteres",
    "string.max": "Como maximo deberia tener 8 caracteres"
};

const messagePassword = {
    "any.string": "El campo es obligatorio",
    "string.min": "Como minimo deberia tener 8 caracteres",
    "string.max": "Como maximo deberia tener 16 caracteres"
};

const messageDate = {
    // "any.string": "El campo es obligatorio",
    // "string.min": "Como minimo deberia tener 8 caracteres",
    // "string.max": "Como maximo deberia tener 8 caracteres"
};

const messageRol = {
    "any.string": "El campo es obligatorio",
    "string.min": "Tienes que seleccionar un Rol valido"
};

const messageGender = {
    "any.string": "El campo es obligatorio",
    "string.valid": "Tienes que seleccionar un Rol valido"
};

const schemas = {
    schemaString: Joi.string().min(2).max(30).required().messages({ messageString }),
    schemaEmail: Joi.string().min(2).max(30).required().messages({ messageString }),
    schemaDni: Joi.string().min(8).max(8).required().messages({ messageDni }),
    schemaPassword: Joi.string().min(8).max(16).required().messages({ messagePassword }),
    schemaDate: Joi.date().iso().required().messages({ messageDate }),
    schemaGender: Joi.string().valid(...Object.values(Enum.genders)).required(),
    schemaRol: Joi.string().valid(...Object.values(Enum.roles)).required(),
    schemaUser: Joi.string().required().messages({ "any.string": "El Dueño es obligatorio" }),
    schemaCountry: Joi.string().required().messages({ "any.string": "El Pais es obligatorio" }),
    schemaPlace: Joi.string().required().messages({ "any.string": "El Lugar es obligatorio" }),
    schemaBreed: Joi.string().required().messages({ "any.string": "La raza es obligatoria" }),
    schemaPicture: Joi.string().required().messages({ "any.string": "La imagen es obligatoria" }),
    schemaCountry: Joi.string().required().messages({ "any.string": "El pais tiene que ser obligatorio" }),
    schemaProvince: Joi.string().required().messages({ "any.string": "La provincia es obligatoria" }),
    schemaProvincePlace: Joi.string().required().messages({ "any.string": "El lugar en la provincia es obligatorio" }),
};

module.exports = { schemas };