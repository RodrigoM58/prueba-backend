# Prueba técnica Api RESTful Proyecto Backend

Esté proyecto incluye una API RESTful para la creación de productos electronicos de una eCommerce, así como su consulta.

## Instalación Ambiente de Desarrollo
### 1. Clonar repositorio
#### Clone el repositorio con el siguiente comando.

```
  git clone https://github.com/RodrigoM58/prueba-backend.git
```

### 2. Instalación de dependencias
#### Una vez clonado ejecute el siguiente comando para realizar la instalación de dependencias.

```
  npm install
```

### 3. Configurar variables de entorno
#### Ingrese a la carpeta config y setee las variables de entorno en el archivo default.yaml.
- **api.identifier:** Etiqueta usada para identificar el nombre del microservicio
- **api.port:** Puerto en el que el servidor **http* se mantendra a la escucha
- **db.url:** Dirección ip o url del servidor de base de datos.
- **db.database:** Nombre de la base de datos a la que nos vamos a conectar.
- **db.horstname:** es el host por el cual se conecta la base de datos
- **db.port:** Puerto del servidor de base de datos.


```
  api: 
  idenfier: product-microservices
  port: "5002"

logger:
  options:
    level: trace

mongodb:
  url: 'mongodb://127.0.0.1:27017'
  database: 'product'
  schema: mongodb
  hostname: '127.0.0.1'
  port: '27017'
  timeout: '5000'
  options:
    user: ''
    pass: ''
    authSource: 'admin'
    dbName: 'product'
    useUnifiedTopology: true
    useNewUrlParser: true

```

### Script para correr el proyecto en ambiente de desarrollo
#### Arranque el proyecto en modo desarrollo con el siguiente comando, esto inicia un monitoreo de cambios con nodemon.

```
  npm run dev:server
```

## Endpoint
Para realizar peticiones a este sevicio es necesario anteponer el prefijo *api* despues de la dirección del servidor, ejemplo: *http://localhost/api/*ruta_endpoint**.

### Endpoints Usuario
1. **Creación de productos**
- Realice una petición de tipo *POST* a la ruta *http://localhost:5002/api/product/register*
- Coloque en el cuerpo de la petición en formato Json los parametros *name, category* como se muestra en el siguiente ejemplo:

**PETICIÓN**
```
   {
     name: 'Samsung Galaxy',
     category: 'electronics'
   }
```
**RESPUESTA**
```
    {
    "ok": true,
    "message": "Samsung Galaxy fue agregado correctamente",
    "response": {
        name: 'Samsung Galaxy',
        category: 'electronics
        id: 1515
    },
    "code": 201
    }
```
*Nota: De manera predeterminada se crearan los registros de los siguientes productos:
    Samsung Galaxy
    electronics

    Motorola V3
    electronics

    Iphone 12
    electronics

    Skippy
    grocery_store

2. **Consulta de productos por categoria**
-Se puede obtener una consulta de los productos por categoria haciendo una petición de tipo *GET* a la ruta *http://localhost:5002/api/consulCategory*.

**RESPUESTA**
```
    {
    "ok": true,
    "message": "Producto encontrado",
    "response":
        {
        name: 'Samsung Galaxy',
        category: 'electronics
        id: 1515
        }, 
        "code": 200
    }   
```
3. **Consulta de productos por nombre**
-Se puede obtener una consulta de los productos por nombre haciendo una petición de tipo *GET* a la ruta *http://localhost:5002/api/consulName*.

**RESPUESTA**
```
    {
    "ok": true,
    "message": "Producto encontrado",
    "response":
        {
        name: 'Samsung Galaxy',
        category: 'electronics
        id: 1515
        }, 
        "code": 200
    }   
```

