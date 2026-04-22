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

// Ruta login 
app.post("/login", (req, res) => {
    const { username, password } = req.body;

    if (username === "admin" && password === "1234") {
        return res.json({ message: "Login exitoso" });
    }

    res.status(401).json({ message: "Credenciales incorrectas" });
});

// Estado del servidor 
app.get("/status", (req, res) => {
    res.json({
        status: "OK",
        secure: true
    });
});

module.exports = app;

