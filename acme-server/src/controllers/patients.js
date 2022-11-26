const knex = require('../services/bdConnection');

const listPatients = async (req, res) => {
    try {
        const patientsList = await knex('patients');

        return res.status(200).json(patientsList);
    } catch (error) {
        console.log(error);
        return res.status(500).json('Erro interno do servidor.');
    }
}

const registerPatient = async (req, res) => {
    const { name, birth_date, cpf, gender, address_line, address_number, district, city, state, zip_code } = req.body;

    try {
        const existingPatient = await knex('patients').where({ cpf }).first();
        if (existingPatient) {
            return res.status(400).json('Paciente com esse CPF já cadastrado.');
        }

        await knex('patients').insert({ name, birth_date, cpf, gender, address_line, address_number, district, city, state, zip_code });

        return res.status(201).json(`Paciente "${name}" cadastrado com sucesso.`);
    } catch (error) {
        console.log(error);
        return res.status(500).json('Erro interno do servidor.');
    }
}

const editPatient = async (req, res) => {
    const { id } = req.params;
    const { name, birth_date, cpf, gender, address_line, address_number, district, city, state, zip_code } = req.body;

    try {
        const existingPatient = await knex('patients').where({ id }).first();
        if (!existingPatient) {
            return res.status(404).json('Paciente não encontrado.');
        }

        const existingCPF = await knex('patients').where({ cpf }).first();
        if (existingCPF && existingCPF.id !== Number(id)) {
            return res.status(400).json('Já existe um paciente com este CPF cadastrado.');
        }

        await knex('patients').update({ name, birth_date, cpf, gender, address_line, address_number, district, city, state, zip_code }).where({ id });

        return res.status(200).json('Dados do paciente atualizados com sucesso.');
    } catch (error) {
        console.log(error);
        return res.status(500).json('Erro interno do servidor.');
    }
}

const inactivatePatient = async (req, res) => {
    const { id: patient_id } = req.params;
    const id = Number(patient_id);

    try {
        const existingPatient = await knex('patients').where({ id }).first();
        if (!existingPatient) {
            return res.status(404).json('Paciente não encontrado.');
        }

        await knex('patients').update({ active: false }).where({ id });

        return res.status(200).json('Paciente inativado com sucesso.');
    } catch (error) {
        console.log(error);
        return res.status(500).json('Erro interno do servidor.');
    }
}

const activatePatient = async (req, res) => {
    const { id } = req.params;

    try {
        const existingPatient = await knex('patients').where({ id }).first();
        if (!existingPatient) {
            return res.status(404).json('Paciente não encontrado.');
        }

        await knex('patients').update({ active: true }).where({ id });

        return res.status(200).json('Paciente ativado com sucesso.');
    } catch (error) {
        console.log(error);
        return res.status(500).json('Erro interno do servidor.');
    }
}

module.exports = {
    registerPatient,
    listPatients,
    editPatient,
    inactivatePatient,
    activatePatient
}