const knex = require('../services/bdConnection');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const authentication = async (req, res, next) => {
    const { authorization } = req.headers;
    console.log(req.headers);

    const token = authorization.split(' ')[1];
    if (!token) {
        return res.status(401).json({ mensagem: 'Faça login para utilizar esse recurso.' });
    }


    try {
        const user = jwt.verify(token, process.env.JWT_PASSWORD);

        const existingUser = await knex('users').where({ id: user.id });

        if (!existingUser) { return res.status(401).json({ mensagem: "Usuário não autorizado" }) }

        req.user = existingUser;

        next();
    } catch (error) {
        if (error.message === 'jwt expired' || error.message === 'jwt malformed') {
            return res.status(401).json(error.message);
        }
        return res.status(500).json("Erro interno do servidor");
    }
}

module.exports = { authentication };