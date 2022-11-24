const knex = require('../services/apiConnection');

const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const existingEmail = await knex('users').where({ email }).first();
        if (existingEmail) {
            return res.status(400).json({ message: 'Já existe um usuário cadastrado com esse e-mail.' });
        }

        await knex('users').insert({ name, email, password });

        return res.status(201).json({ message: 'Usuário cadastrado com sucesso.' });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Erro no servidor.' });
    }
}

module.exports = {
    registerUser
}