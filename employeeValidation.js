const Joi = require('joi');

module.exports.employeeSchemaValidation = Joi.object({
    employee: Joi.object({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        age: Joi.number().required(),
        address: Joi.string().required(),
        email: Joi.string().email(),
        office: Joi.string(),
        position: Joi.string().required(),
        sssId: Joi.string(),
        gsisId: Joi.string(),
        philHealthId: Joi.string(),
        pagibigId: Joi.string(),
        tinId: Joi.string(),
        designation: Joi.string().required()
        
    }).required()

})