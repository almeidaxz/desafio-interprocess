const express = require('express');
const routes = express();

routes.get('/', (req, res) => {
    return res.status(200).json({ message: "Servidor ativo" });
});

routes.post('/user/register', () => {
    return res.send('Rota de registro');
});
routes.post('/user/login', () => {
    return res.send('Rota de login');
});

module.exports = routes;