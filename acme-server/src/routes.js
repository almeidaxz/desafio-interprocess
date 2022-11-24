const express = require('express');
const routes = express();
const { registerUser, loginUser } = require('./controllers/users');
const { registerUserSchema } = require('./schemas/users');
const { validateUserData } = require('./middlewares/users');

routes.get('/', (req, res) => {
    return res.status(200).json({ message: "Servidor ativo" });
});

routes.post('/user/register', validateUserData(registerUserSchema), registerUser);
routes.post('/user/login', loginUser);

module.exports = routes;