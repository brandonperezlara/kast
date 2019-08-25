const constants = require('../../constants');
const objModel = require('../../models/users');

const repo = {

    findUsers: async({ findObject }) => {
        try {
            //find query
            let query = {};

            query[findObject.key] = (findObject.value);

            //find object
            let response = await objModel.find(query).sort('text');

            //set values
            let status, failure_code, failure_message;
            //Set status
            status = constants.SUCCEEDED_MESSAGE;

            //return response
            return {
                status: status,
                datos: response,
                failure_code: failure_code,
                failure_message: failure_message,
            };

        } catch (e2) {
            return {
                status: constants.INTERNAL_ERROR_MESSAGE,
                failure_code: e2.code,
                failure_message: e2.message,
            };
        }
    },



    searchUsers: async() => {
        try {

            //find object
            let response = await objModel.find().sort('text');

            //return response
            return {
                status: constants.SUCCEEDED_MESSAGE,
                datos: response,
                failure_code: null,
                failure_message: null,
            };

        } catch (e2) {
            return {
                status: constants.INTERNAL_ERROR_MESSAGE,
                failure_code: e2.code,
                failure_message: e2.message,
            };
        }
    },


    insert: async(objData) => {
        try {

            let status, failure_code, failure_message;

            //find object
            let response = await objModel.insertMany([objData]);

            //set values
            if (response != null && response.length > 0) {
                //Set status
                status = constants.SUCCEEDED_MESSAGE;
            } else {
                //Set status
                status = constants.SUCCEEDED_MESSAGE;
            }

            //return response
            return {
                status: status,
                datos: response,
                failure_code: failure_code,
                failure_message: failure_message,
            };

        } catch (e2) {
            return {
                status: constants.INTERNAL_ERROR_MESSAGE,
                failure_code: e2.code,
                failure_message: e2.message,
            };
        }
    },

    update: async(objData) => {
        try {

            let status, failure_code, failure_message;

            let objFilter = { _id: objData._id };

            //find object
            let response = await objModel.findOneAndUpdate(objFilter, objData);

            //set values
            if (response != null && response.length > 0) {
                //Set status
                status = constants.SUCCEEDED_MESSAGE;
            } else {
                //Set status
                status = constants.SUCCEEDED_MESSAGE;
            }

            //return response
            return {
                status: status,
                datos: response,
                failure_code: failure_code,
                failure_message: failure_message,
            };

        } catch (e2) {
            return {
                status: constants.INTERNAL_ERROR_MESSAGE,
                failure_code: e2.code,
                failure_message: e2.message,
            };
        }
    },

    remove: async(objdata) => {
        try {

            let status, failure_code, failure_message;

            let objFilter = { _id: objdata._id };

            //find object
            let response = await objModel.findOneAndRemove(objFilter, objdata);

            //set values
            if (response != null && response.length > 0) {
                //Set status
                status = constants.SUCCEEDED_MESSAGE;
            } else {
                //Set status
                status = constants.SUCCEEDED_MESSAGE;
            }

            //return response
            return {
                status: status,
                datos: response,
                failure_code: failure_code,
                failure_message: failure_message,
            };

        } catch (e2) {
            return {
                status: constants.INTERNAL_ERROR_MESSAGE,
                failure_code: e2.code,
                failure_message: e2.message,
            };
        }
    },



};
module.exports = repo;