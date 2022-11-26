const joi = require('joi');

const registerPatientSchema = joi.object({
    name: joi.string().required().trim().messages({
        'any.required': 'O nome deve ser preenchido.',
        'string.empty': 'O nome deve ser preenchido.'
    }),
    birth_date: joi.date().format('yyyy-mm-dd').greater('now').required().messages({
        'any.required': 'A data deve ser preenchida.',
        'date.greater': 'A data de nascimento não deve ser maior do que hoje.',
        'date.format': 'O formato de data inválido.'
    }),
    cpf: joi.string().length(11).pattern(/^\d+$/).trim().required().messages({
        'any.required': 'O CPF deve ser informado.',
        'string.empty': 'O CPF deve ser informado.'
    }),
    gender: joi.string().required().trim().messages({
        'any.required': 'O gênero deve ser informado.',
        'string.empty': 'O gênero deve ser informado.'
    }),
    address_line: joi.string().required().optional().empty('').trim().messages({
        'any.required': 'A rua deve ser informada.',
        'string.empty': 'A rua deve ser informada.'
    }),
    zip_code: joi.number().required().optional().empty('').messages({
        'any.required': 'O CEP deve ser informado.',
        'number.base': 'O CEP deve ser informado.'
    }),
    address_number: joi.number().required().optional().empty('').messages({
        'any.required': 'O número deve ser informado.',
        'number.base': 'O número deve ser informado.'
    }),
    district: joi.string().required().optional().empty('').trim().messages({
        'any.required': 'O bairro deve ser informado.',
        'string.empty': 'O bairro deve ser informado.'
    }),
    city: joi.string().required().optional().empty('').trim().messages({
        'any.required': 'A cidade deve ser informada.',
        'string.empty': 'A cidade deve ser informada.'
    }),
    state: joi.string().required().optional().empty('').trim().messages({
        'any.required': 'A estado deve ser informada.',
        'string.empty': 'A estado deve ser informada.'
    }),
});

const editPatientSchema = joi.object({
    name: joi.string().required().trim().optional().empty().messages({
        'any.required': 'O nome deve ser preenchido.',
        'string.empty': 'O nome deve ser preenchido.'
    }),
    birth_date: joi.date().required().optional().empty().messages({
        'any.required': 'A senha deve ser preenchida.',
        'date.greater': 'A data de nascimento não deve ser maior do que hoje.',
        'date.format': 'O formado de data é inválido.'
    }),
    // birth_date: joi.date().greater('now').required().messages({
    //     'any.required': 'A senha deve ser preenchida.',
    //     'date.greater': 'A data de nascimento não deve ser maior do que hoje.',
    //     'date.format': 'O formado de data é inválido.'
    // }),
    cpf: joi.string().length(11).pattern(/^\d+$/).optional().empty().trim().required().messages({
        'any.required': 'O CPF deve ser informado.',
        'string.empty': 'O CPF deve ser informado.'
    }),
    gender: joi.string().required().optional().empty().trim().messages({
        'any.required': 'O gênero deve ser informado.',
        'string.empty': 'O gênero deve ser informado.'
    }),
    address: joi.string().required().optional().empty().trim().messages({
        'any.required': 'O endereço deve ser informado.',
        'string.empty': 'O endereço deve ser informado.'
    })
});

module.exports = {
    registerPatientSchema,
    editPatientSchema
}