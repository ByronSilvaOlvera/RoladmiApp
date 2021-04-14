# Edwin Byron Silva Olvera

byron.silva@consulti.ec


# Bienvenido al reto Telconet !

Aquí encontrarás las instrucciones para que puedas realizar la prueba práctica.

# Prueba de conocimiento
## Acceso

Accede al siguiente enlace [shorturl.at/elFKO](http://shorturl.at/elFKO) y descarga el archivo a tu máquina local.


## Repuestas

> **Nota:** La documentación implica diagramas, scripts bd, código fuente, instructivo de depsliegue, evidencia de funcionamiento, videos etc.


# BASE DE DATOS 
Gestor datos : MongoDB
Configuracion:

	.env: este archivo agregue la ruta de mongoDB. ubicacion: ruta principal. 
	config.js: este archivo lee las variables globales. ubicacion: database.


# CRUD API roles 
# Url ADD: http://localhost:8092/api/rolapp/rol/add
 Dato Prueba
	{
		"nombre" : "admin",
		"estado" : "activo",
		"fecha"  : "2021-04-13"
	}
	
# Url GET : http://localhost:8092/api/rolapp/rol
# Sin Dato prueba

Response
{
    "ok": true,
    "msg": "todo bien",
    "entidad": [
        {
            "_id": "60760491aacbd80b44f1f990",
            "nombre": "admin",
            "estado": "activo",
            "fecha": "2021-04-13T00:00:00.000Z",
            "createdAt": "2021-04-13T20:52:33.717Z",
            "updatedAt": "2021-04-13T20:52:33.717Z",
            "__v": 0
        }
    ]
}

#CRUD API Aplicacion
#Url Add: http://localhost:8092/api/rolapp/appl/add

#Dato Prueba
{
    "nombre" : "Facturacion",
    "estado" : "Activo",
    "fecha" : "2021-04-13"
}

#Url Get : http://localhost:8092/api/rolapp/appl
# Sin dato de Prueba 


#CRUD API USUARIO
#URL ADD: http://localhost:8092/api/usuario/add
Dato Prueba
{
    "nombre" : "Maria Aguirre ",
    "apellido" : "Moran Aguirre",
    "edad"   : "21",
    "email" : "test2@gmail.com",
    "password" : "123456",
    "roles" : [
        {"idRol" : "6076059eaacbd80b44f1f991"}
    ],
    "applicaiones" : [
        { "idApp" : "6076067acb1be33844827c61"},
        { "idApp" : "6076068ecb1be33844827c62"}
    ]
}

#URL GET : http://localhost:8092/api/usuario/

Sin dato prueba



