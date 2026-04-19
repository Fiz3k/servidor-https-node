// Importa módulos necesarios
const https = require("https");
const fs = require("fs");
const app = require("./server");

// Configuración vacía (otro integrante completará esto)
const options = {
    key: fs.readFileSync("key.pem"),
    cert: fs.readFileSync("cert.pem"),
};

// Crear servidor HTTPS
https.createServer(options, app).listen(8080, () => {
    console.log("Servidor HTTPS listo en https://localhost:8080");
});
