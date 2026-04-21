// Importa módulos necesarios
const https = require("https");
const fs = require("fs");
const app = require("./server");

// Carga la clave privada y certificado SSL
const options = {
    key: fs.readFileSync("key.pem"),
    cert: fs.readFileSync("cert.pem"),
};

// Crear servidor HTTPS
https.createServer(options, app).listen(8080, () => {
    console.log("Servidor HTTPS listo en https://localhost:8080");
});

//ruta de prueba 
