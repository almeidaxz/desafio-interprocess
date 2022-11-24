const express = require('express');
const routes = express();
const { registerUser } = require('./controllers/users');
const { registerUserSchema } = require('./schemas/users');
const { validateUserData } = require('./middlewares/users');

routes.get('/', (req, res) => {
    return res.status(200).json({ message: "Servidor ativo" });
});

routes.post('/user/register', validateUserData(registerUserSchema), registerUser);
routes.post('/user/login', () => {
    return res.send('Rota de login');
});

module.exports = routes;