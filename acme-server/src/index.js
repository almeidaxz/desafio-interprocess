const express = require('express');
const app = express();


app.get('/', (req, res) => {
    return res.status(200).json({ message: "Servidor de pé" });
});

const port = process.env.PORT || 3000;

app.listen(() => {
    console.log(`Servidor rodando na porta ${port}`);
});