const knex = require('../services/apiConnection');

const listPatients = async (req, res) => {
    try {
        const patientsList = await knex('patients');

        return res.status(200).json(patientsList);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Erro interno do servidor.' });
    }
}

const registerPatient = async (req, res) => {
    const { name, birth_date, cpf, gender, address } = req.body;

    try {
        const existingPatient = await knex('patients').where({ cpf }).first();
        if (existingPatient) {
            return res.status(400).json({ message: 'Paciente já cadastrado.' });
        }

        await knex('patients').insert({ name, birth_date, cpf, gender, address });

        return res.status(201).json({ message: `Paciente ${name} cadastrado com sucesso.` });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Erro interno do servidor.' });
    }
}

module.exports = {
    registerPatient,
    listPatients
}