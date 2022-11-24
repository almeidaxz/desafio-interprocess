const express = require('express');
const routes = express();
const { registerUser, loginUser } = require('./controllers/users');
const { registerPatient, listPatients, editPatient, inactivatePatient } = require('./controllers/patients');
const { validateUserData } = require('./middlewares/users');
const { validatePatientData } = require('./middlewares/patients');
const { registerUserSchema, loginUserSchema } = require('./schemas/users');
const { registerPatientSchema, editPatientSchema } = require('./schemas/patients');

routes.get('/', (req, res) => {
    return res.status(200).json({ message: "Servidor ativo" });
});

routes.post('/user/register', validateUserData(registerUserSchema), registerUser);
routes.post('/user/login', validateUserData(loginUserSchema), loginUser);
routes.get('/patients/list', listPatients);
routes.post('/patients/register', validatePatientData(registerPatientSchema), registerPatient);
routes.put('/patients/:id/edit', validatePatientData(editPatientSchema), editPatient);
routes.delete('/patient/:id/delete', inactivatePatient);

module.exports = routes;