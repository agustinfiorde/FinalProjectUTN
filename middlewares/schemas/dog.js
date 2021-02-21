const Joi = require("@hapi/joi");
const { schemas } = require("./schema");

exports.schemasDog = {
    create: Joi.object().keys({
        nickName: schemas.schemaString,
        breed: schemas.schemaString,
        placeOfBreed: schemas.schemaString,
        dni: schemas.schemaDni,
        dateOfBirth: schemas.schemaDate,
        gender: schemas.schemaGender,
        country: schemas.schemaCountry,
        province: schemas.schemaProvince,
        provincePlace: schemas.schemaProvincePlace,
        registeredBy: schemas.schemaUser,
    }),

    modify: Joi.object().keys({
        id: schemas.schemaId,
        nickName: schemas.schemaString,
        breed: schemas.schemaString,
        placeOfBreed: schemas.schemaString,
        dni: schemas.schemaDni,
        dateOfBirth: schemas.schemaDate,
        gender: schemas.schemaGender,
        country: schemas.schemaCountry,
        province: schemas.schemaProvince,
        provincePlace: schemas.schemaProvincePlace,
        registeredBy: schemas.schemaUser,
    })
}