const Joi = require('joi');



module.exports.userSchemaValidation = Joi.object({
    user: Joi.object({
        name: Joi.string().required(),
        password: Joi.string().required(),
        email: Joi.string().required()
    }).required()

})

