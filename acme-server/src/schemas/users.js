const joi = require('joi');

const registerUserSchema = joi.object({
    name: joi.string().required().messages({
        'any.required': 'O nome deve ser preenchido.',
        'string.empty': 'O nome deve ser preenchido.'
    }),
    email: joi.string().email().required().messages({
        'any.required': 'O e-mail deve ser preenchido.',
        'string.email': 'O e-mail inválido.',
        'string.empty': 'O e-mail deve ser preenchido.'
    }),
    password: joi.string().required().messages({
        'any.required': 'A senha deve ser preenchida.',
        'string.empty': 'A senha deve ser preenchida.',
        'string.min': 'A senha deve ter no mínimo 8 caracteres.'
    })
});
const loginUserSchema = joi.object({
    email: joi.string().email().required().messages({
        'any.required': 'O e-mail deve ser preenchido.',
        'string.email': 'O e-mail inválido.',
        'string.empty': 'O e-mail deve ser preenchido.'
    }),
    password: joi.string().required().messages({
        'any.required': 'A senha deve ser preenchida.',
        'string.empty': 'A senha deve ser preenchida.',
        'string.min': 'A senha deve ter no mínimo 8 caracteres.'
    })
});

module.exports = {
    registerUserSchema,
    loginUserSchema
}