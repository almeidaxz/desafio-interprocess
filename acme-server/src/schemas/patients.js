const joiImport = require('joi');
const dateExtension = require('@joi/date');
const joi = joiImport.extend(dateExtension);

const registerPatientSchema = joi.object({
    name: joi.string().required().trim().messages({
        'any.required': 'O nome deve ser preenchido.',
        'string.empty': 'O nome deve ser preenchido.'
    }),
    birth_date: joi.date().format('YYYY-MM-DD').max('now').iso().required().messages({
        'any.required': 'A senha deve ser preenchida.',
        'date.max': 'A data de nascimento não deve ser posterior ao dia de  hoje.',
        'date.format': 'Informe uma data válida.'
    }),
    gender: joi.string().required().trim().messages({
        'any.required': 'O gênero deve ser informado.',
        'string.empty': 'O gênero deve ser informado.'
    }),
    cpf: joi.string().length(11).pattern(/^\d+$/).trim().required().messages({
        'any.required': 'O CPF deve ser informado.',
        'string.empty': 'O CPF deve ser informado.',
        'string.length': 'O CPF deve conter 11 dígitos',
    }),
    zip_code: joi.string().length(8).optional().empty('').messages({
        'string.length': 'O CEP deve conter 8 dígitos.'
    }),
    address_number: joi.number().optional().empty('').messages({
        'number.base': 'O número deve ser informado.'
    }),
    address_line: joi.string().required().optional().empty('').trim().messages({
        'any.required': 'A rua deve ser informada.',
        'string.empty': 'A rua deve ser informada.'
    }),
    district: joi.string().optional().empty('').trim().messages({
        'any.required': 'O bairro deve ser informado.'
    }),
    city: joi.string().optional().empty('').trim().messages({
        'any.required': 'A cidade deve ser informada.'
    }),
    state: joi.string().length(2).optional().empty('').trim().messages({
        'string.length': 'O estado deve possuir 2 caracteres.'
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
    zip_code: joi.string().length(8).optional().empty('').messages({
        'string.length': 'O CEP deve conter 8 dígitos.'
    }),
    address_number: joi.number().optional().empty('').messages({
        'number.base': 'O número deve ser informado.'
    }),
    address_line: joi.string().required().optional().empty('').trim().messages({
        'any.required': 'A rua deve ser informada.',
        'string.empty': 'A rua deve ser informada.'
    }),
    district: joi.string().optional().empty('').trim().messages({
        'any.required': 'O bairro deve ser informado.'
    }),
    city: joi.string().optional().empty('').trim().messages({
        'any.required': 'A cidade deve ser informada.'
    }),
    state: joi.string().length(2).optional().empty('').trim().messages({
        'string.length': 'O estado deve possuir 2 caracteres.'
    }),
});

module.exports = {
    registerPatientSchema,
    editPatientSchema
}