## Certificados SSL

Se generaron con:

openssl req -x509 -newkey rsa:2048 -nodes -keyout key.pem -out cert.pem -days 365

## Pruebas

- Se accedió a https://localhost:8080
- El navegador mostró advertencia de seguridad
- Se continuó manualmente
- El servidor respondió correctamente
