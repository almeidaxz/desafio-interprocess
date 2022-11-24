const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();
require('dotenv').config();

app.use(express.json());
app.use(cors());
app.use(routes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

module.exports = app;