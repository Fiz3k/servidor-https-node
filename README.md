
# Servidor HTTPS con Node.js y Express

Este proyecto implementa un servidor backend seguro utilizando Node.js, Express y el protocolo HTTPS mediante certificados SSL auto-firmados.

---

## Objetivo

Configurar un servidor HTTPS comprendiendo el uso de certificados SSL, cifrado y seguridad en aplicaciones backend.

---

## Tecnologías utilizadas

* Node.js
* Express
* OpenSSL
* HTTPS (módulo nativo de Node.js)

---

## Instalación y ejecución

### 1. Clonar el repositorio

git clone https://github.com/Fiz3k/servidor-https-node.git
cd servidor-https-node

### 2. Instalar dependencias

npm install

### 3. Generar certificados SSL

openssl req -x509 -newkey rsa:2048 -nodes -keyout key.pem -out cert.pem -days 365

### 4. Ejecutar el servidor

node https-server.js

### 5. Acceder desde el navegador

https://localhost:8080

---

## Configuración HTTPS

El servidor utiliza el módulo `https` de Node.js junto con certificados SSL generados mediante OpenSSL.

Se reemplaza el uso de `app.listen` por `https.createServer`, permitiendo una conexión cifrada entre cliente y servidor.

---

## Endpoints disponibles

### GET /

Retorna un mensaje indicando que el servidor HTTPS está funcionando.

---

### GET /test

Retorna una respuesta JSON de prueba.

Ejemplo:
{
"mensaje": "Ruta de prueba OK"
}

---

### POST /login

Permite validar credenciales enviadas en formato JSON.

Ejemplo de request:
{
"username": "admin",
"password": "1234"
}

Respuestas:

✔ Correcto:
{
"message": "Login exitoso"
}

❌ Incorrecto:
{
"message": "Credenciales incorrectas"
}

---

### GET /status

Retorna el estado del servidor.

{
"status": "OK",
"secure": true
}

---

## Pruebas realizadas

* Acceso a https://localhost:8080
* Validación de endpoints en navegador
* Pruebas de login en Postman
* Verificación de advertencia por certificado auto-firmado

⚠️ Nota: Es normal que el navegador indique "sitio no seguro" al usar certificados auto-firmados.

---

## Seguridad

Los archivos sensibles fueron excluidos del repositorio mediante `.gitignore`:

node_modules/
.env
key.pem
cert.pem

Esto evita exponer la clave privada y el certificado.

---

## Trabajo colaborativo

El proyecto fue desarrollado utilizando GitHub:

* Uso de ramas (feature/ssl, feature/routes)
* Commits descriptivos
* Integración mediante Pull Requests

---

