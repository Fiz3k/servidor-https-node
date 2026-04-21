// Importa Express
const express = require("express");

// Inicializa la app
const app = express();

// Middleware básico (para JSON)
app.use(express.json());

// Ruta principal
app.get("/", (req, res) => {
    res.send("Servidor HTTPS funcionando");
});
//ruta de prueba 
app.get("/test", (req, res) => {
    res.json({ mensaje: "Ruta de prueba OK" });
});

// Exporta la app 
module.exports = app;

