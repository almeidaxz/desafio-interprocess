const knex = require('../services/bdConnection');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const existingEmail = await knex('users').where({ email }).first();
        console.log(existingEmail);
        if (existingEmail) {
            return res.status(400).json('Já existe um usuário cadastrado com esse e-mail.');
        }

        const encryptedPassword = await bcrypt.hash(password, 10);

        await knex('users').insert({ name, email, password: encryptedPassword });

        return res.status(201).json({ message: 'Usuário cadastrado com sucesso.' });
    } catch (error) {

        return res.status(500).json({ message: 'Erro no servidor.' });
    }
}

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await knex('users').where({ email }).first();
        if (!existingUser) {
            return res.status(401).json('Usuario não cadastrado.');
        }

        const decryptedPassword = await bcrypt.compare(password, existingUser.password);
        if (!decryptedPassword) {
            return res.status(401).json('Senha incorreta.');
        }

        const token = jwt.sign({ id: existingUser.id, name: existingUser.name }, process.env.JWT_PASSWORD, { expiresIn: '8h' });

        const { password: _, ...logedUser } = existingUser;

        return res.status(200).json({ ...logedUser, token });
    } catch (error) {
        console.log(error);
        return res.status(500).json('Erro interno do servidor.');
    }
}

module.exports = {
    registerUser,
    loginUser
}