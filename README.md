# Skeleton project for Swagger

Instalar:
    `npm install`
    
Configuración de la BD:
    archivo `config/config.json`

Para probar: 

Arrancar servidor:
    `npm run start`

Arrancar editor swagger:
    `swagger project edit`



endpoints:
    GET /test/{testId}
        Recupera elregistro con id = testId
    POST /tests
        Crea un nuevo registro: {name: STRING, age: INTEGER}
