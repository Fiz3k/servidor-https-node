// Importa Express
const express = require("express");

// Inicializa la app
const app = express();

// Middleware básico (para JSON)
app.use(express.json());

// Ruta principal
app.get("/", (req, res) => {
    res.send("Servidor base funcionando");
});

// Exporta la app 
module.exports = app;
