const Joi = require("@hapi/joi");
const { schemas } = require("./schema");

exports.schemasUser = {
    create: Joi.object().keys({
        name: schemas.schemaString,
        lastName: schemas.schemaString,
        dni: schemas.schemaDni,
        dateOfBirth: schemas.schemaDate,
        rol: schemas.schemaRol,
        email: schemas.schemaEmail,
        password: schemas.schemaPassword,
        gender: schemas.schemaGender,
        country: schemas.schemaCountry,
        province: schemas.schemaProvince,
        provincePlace: schemas.schemaProvincePlace,
        // pictureId: schemas.schemaPicturem,
    }),

    modify: Joi.object().keys({
        id: schemas.schemaId,
        name: schemas.schemaString,
        lastName: schemas.schemaString,
        dni: schemas.schemaDni,
        dateOfBirth: schemas.schemaDate,
        rol: schemas.schemaRol,
        email: schemas.schemaEmail,
        password: schemas.schemaPassword,
        gender: schemas.schemaGender,
        country: schemas.schemaCountry,
        province: schemas.schemaProvince,
        provincePlace: schemas.schemaProvincePlace,
    })
}
