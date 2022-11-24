const express = require('express');
const routes = express();
const { registerUser, loginUser } = require('./controllers/users');
const { registerPatient } = require('./controllers/patients');
const { validateUserData } = require('./middlewares/users');
const { validatePatientData } = require('./middlewares/patients');
const { registerUserSchema, loginUserSchema } = require('./schemas/users');
const { registerPatientSchema } = require('./schemas/patients');

routes.get('/', (req, res) => {
    return res.status(200).json({ message: "Servidor ativo" });
});

routes.post('/user/register', validateUserData(registerUserSchema), registerUser);
routes.post('/user/login', validateUserData(loginUserSchema), loginUser);
routes.post('/patients/register', validatePatientData(registerPatientSchema), registerPatient);

module.exports = routes;