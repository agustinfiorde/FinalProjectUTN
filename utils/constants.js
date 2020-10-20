const genders = {
    MALE: 'MALE',
    FEMALE: 'FEMALE',
    OTHER: 'OTHER'
}

const roles = {
    USER: 'USER',
    ADMIN: 'ADMIN',
    SUPER_ADMIN: 'SUPER_ADMIN'
}

const sequelize = {
    attributesToExcludeDog: ['createdAt', 'updatedAt', 'userId', 'registeredBy', 'active'],
    attributesToExcludeUser: ['createdAt', 'updatedAt', 'active'],
}

module.exports = { genders, roles, sequelize };