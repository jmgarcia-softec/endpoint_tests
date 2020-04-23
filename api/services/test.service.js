const models = require("../../models");

const getById = async (id) => {

    return models.Test.findByPk(id, { raw: true })
        .then(res => res)
        .catch(e => {
            throw {
                code: 500,
                message: "Error getting item ",
                description: e
            };
        })
}

const getAll = async (id) => {

    return models.Test.findAll({ raw: true })
        .then(res => res)
        .catch(e => {
            throw {
                code: 500,
                message: "Error getting items ",
                description: e
            };
        })
}

function createTest(data) {

    return models.Test.create(data).catch(e => {
        throw {
            code: 500,
            message: "Error creating item",
            description: e
        };
    });
}

module.exports = {
    getById,
    getAll,
    createTest
};