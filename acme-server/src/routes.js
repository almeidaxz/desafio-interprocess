const express = require('express');
const routes = express();
const { registerUser } = require('./controllers/users');

routes.get('/', (req, res) => {
    return res.status(200).json({ message: "Servidor ativo" });
});

routes.post('/user/register', registerUser);
routes.post('/user/login', () => {
    return res.send('Rota de login');
});

module.exports = routes;