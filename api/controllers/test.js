'use strict';
const ControllerHelper = require("../helpers/controller.helper");
const service = require("../services/test.service");

const MODULE_NAME = "test";
const  getById = async (req, res) =>{
    try {
        
        const testId = req.swagger.params.testId.value;

        const data =   await service.getById(testId)

        // Return success object
        ControllerHelper.handleSuccessResponse(
            200,
            MODULE_NAME,
            getById.name,
            data,
            res,
            req
        );

    } catch (error) {
        // Return error object
        ControllerHelper.handleErrorResponse(
            MODULE_NAME,
            getById.name,
            error,
            res,
            req
        );
    }
}

const  getAll = async (req, res) =>{
    try {
        

        const data =   await service.getAll()

        // Return success object
        ControllerHelper.handleSuccessResponse(
            200,
            MODULE_NAME,
            getById.name,
            data,
            res,
            req
        );

    } catch (error) {
        // Return error object
        ControllerHelper.handleErrorResponse(
            MODULE_NAME,
            getById.name,
            error,
            res,
            req
        );
    }
}

async function createTest (req, res) {
    try {
        
        const params = req.body;
        
        const data =  await service.createTest(params)

        // Return success object
        ControllerHelper.handleSuccessResponse(
            200,
            MODULE_NAME,
            createTest.name,
            data,
            res,
            req
        );
    } catch (error) {
        // Return error object
        ControllerHelper.handleErrorResponse(
            MODULE_NAME,
            createTest.name,
            error,
            res,
            req
        );
    }
}

module.exports = {
    getById,
    getAll,
    create:createTest
};
