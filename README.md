# Proyecto VideoClub/Netflix DB/API 🎥

Proyecto de creación de una Base de Datos y una aPI rest que simule el backend de un servicio de alquiler de películas y series en línea del tipo Netflix. 

## Base de datos 🧰

La base de datos cuenta de 6 tablas: Movies y Series, que se relacionan con Artículos mediante una relación ISA, Loans, Users y Rols. Los usuarios podrán hacer un pedido de un artículo. Cada pedido es de un único artículo, pero cada usuario puede hacer cuantos pedidos quiera. Los usuarios podrán tener varios pedidos o ninguno, pero en un pedido solo podrá aparecer un usuario (1:N). Los artículos podrán aparecer en varios pedidos o en ninguno, pero en un pedido solo podrá aparece una película (1:N). La relación entre tablas sería la siguiente:
***
[![tablas-db.png](https://i.postimg.cc/26Psy31g/tablas-db.png)](https://postimg.cc/Q9J4n8kq)

## Pre-requisitos del proyecto para hacerlo funcionar en tu equipo local: 📌

* Instalar **Nodejs** en nuestro equipo, descargándolo de su página oficial
https://nodejs.org/

* Clonar el proyecto en nuestro equipo con git bash:
```
$git clone 'url-del-repositorio'
```

* Instalar todas las dependecias con el siguiente comando:
```
npm i
```

* Arrancamos el servidor con el siguiente comando:
```
npm run dev
```

## Creación de la base de datos ➕

Tras modificar el archivo /config/config.json con los datos de nuestro servidor mysql (username, password, database y host), deberemos crear un archivo .env añadiendo los datos de nuestro servidor. Usaremos de muestra el archivo .env.example. Después haremos lo siguiente:

* **Creación de las tablas**:

Para crear las tablas se ha utilizado el método 
````
sequelize.sync({force:true})
````
Para generar las tablas se deberá ir al archivo app.js
[![app-js.png](https://i.postimg.cc/BQMBqkPG/app-js.png)](https://postimg.cc/QHKTm6q6)

Ir al código app.listen:

[![authenticate.png](https://i.postimg.cc/QtdXrF2D/authenticate.png)](https://postimg.cc/NyZh6jGC)

Y cambiar el código

````
sequelize.authenticate()
````

por el código mencionado anteriormente:

````
sequelize.sync({force:true})
````

[![syncforcetrue.png](https://i.postimg.cc/HxFXc14r/syncforcetrue.png)](https://postimg.cc/1ncf2TdS)

Ahora deberemos guardar y dejar que se generen las tablas en la base de datos. Una vez finalizada la creación, deberemos volver a cambiar el código 

````
sequelize.authenticate()
````


* **Creación de los registros**:
```
sequelize db:seed:all
```
<br>
<br>

## Uso de la API ▶

Botón para usar la colección de postman, en donde están todos los endpoints para poder manipular la base de datos:
<br>

 [![Ejecutar en Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/11138723-eeb5cf01-1f60-493f-9755-3a67dcc8988f?action=collection%2Ffork&collection-url=entityId%3D11138723-eeb5cf01-1f60-493f-9755-3a67dcc8988f%26entityType%3Dcollection%26workspaceId%3D8cbf41ec-fd52-44cd-82e7-1a6bcbebc7d5)

## Tecnologías utilizadas en el proyecto: 🔧

* **express**: Instalamos express en nuestro proyecto:
```
npm install express
```
* **nodemon**: Instalamos nodemon en nuestro proyecto. También añadimos en nuestro **package.json** un script para poder ejecutarlo:
```
npm install nodemon
```
```
//AÑADIDO EN PACKAGE.JSON
"dev": "nodemon app.js"
```
```
//EJECUTAMOS EN TERMINAL
npm run dev
```
* **colors**: Instalamos colors en nuestro proyecto, para poder dar formato a los mensajes que aparezcan en consola.
```
npm install colors
```
* **morgan**: Instalamos morgan en nuestro proyecto, para poder mostrar mensajes por terminal al realizar peticiones al servidor.
```
npm install morgan
```
* **winston**: Instalamos winston en nuestro proyecto, creando la posibilidad de generar logs y guardarlos.
```
npm install sequelize-cli -g
npm install --save sequelize mysql2 sequelize-cli
sequelize init
```
* **jsonwebtoken**: Instalamos jsonwebtoken en nuestro proyecto para gestionar uso de tokens:
```
npm install jsonwebtoken
```


## Explicación de la estructura del proyecto 📎

Usamos el modelo vista-controlador para estructurar el proyecto. **Creamos un CRUD básico**. En el proyecto existirá la siguiente estructura:

* **app.js**: Este es el archivo principal. En este archivo se llama al archivo de las rutas, a express, a colors, a morgan y al resto del middleware que van a tener todas las rutas y se arranca el servidor.

* **config**
    * **config.json**: En este archivo se gestiona la configuración para conectar con la base de datos. Se crea de manera automática con **sequelize**.


* **middlewares**
    * **auth.middleware.js**: En este archivo se gestiona la existencia y uso de los token para acceder a las zonas restringidas de la API.
    * **log.middleware**: En este archivo se gestionan los logs

* **db.js**: En este archivo se gestiona el acceso a la base de datos.

* **router.js**: En este archivo se gestiona las diferentes rutas que puede tener la aplicación. Se creará una ruta por cada tabla de la base de datos a la que queramos acceder.

[![routers.png](https://i.postimg.cc/pXMxCcsz/routers.png)](https://postimg.cc/rzjvFjXw)

* **routes**
    * **moviesRoutes.js**: En este archivo gestionamos la ruta /movies y los endpoints que apuntan a dicha ruta.
    * **seriesRoutes.js**: En este archivo gestionamos la ruta /series y los endpoints que apuntan a dicha ruta.

    * **loansRouter.js**: En este archivo gestionamos la ruta /loans y los endpoints que apuntan a dicha ruta.
    
    * **usersRouter.js**: En este archivo gestionamos la ruta /users y los endpoints que apuntan a dicha ruta.

* **controllers**

    * **moviesControllers.js**: En este archivo creamos las funciones de cada endpoint:
        * **getMoviesID**: Obtenemos una película por su ID. La ruta de acceso será 
        ````
        /movies/id/:id 
        ````
        * **getMoviesTopRated**: Obtenemos las películas más valoradas. La ruta de acceso será 
        ````
        /movies/toprated.
        ````
        * **getMoviestitle**: Obtenemos un listado de las películas filtrado por el titulo de la película. La ruta de acceso será 
        
        ````
        /movies/title/:title
        ````

        * **getMoviesGenre**: Obtenemos un listado de las películas filtrado por el genero de la película. La ruta de acceso será 
        ````
        /movies/genre/:genre
        ````

    * **UsersControllers.js**: En este archivo creamos las funciones de cada endpoint:
        * **register**: Gestionamos el registro en nuestra API. Existe un mínimo de seguridad en la contraseña creada (mínimo 8 caracteres). 
        
        Deberemos pasarle por el body como mínimo:
        ````
        email
        name
        password
        document
        ````
        siendo surname y address opcionales
        
        La ruta de acceso será 
        ````
        /users/register
        ````
        <br>

        * **login**: Gestionamos el login en nuestra API.
        
        Deberemos pasarle por el body:
        ````
        email
        password
        ````
         La ruta de acceso será 
        ````
        /users/login
        ````
        En este punto recibiremos un JWT que deberemos poner en la cabezera "Authorization" para poder acceder al resto de opciones 

        <br>

        * **findAll**: Obtenemos un listado de todos los usuarios (securizado para que solo pueda acceder un administrador).La ruta de acceso será 
        ````
        /users/all
        ````
        <br>

        * **findcurrentuser**: Obtenemos la información del usuario que esté logueado. La ruta de acceso será 
        ````
        /users/findcurrentuser
        ````
        <br>

        * **modify**: Actualizamos el usuario que esté logueado. Deberemos pasarle por el body:
        ````
         email
         ````
        Y los datos a modificar, que pueden ser: 

        ````
        name
        surname
        address
         ````
        La ruta de acceso será 
        ````
        */users/modify*
        ````
        
        <br>
        
        * **deleteUser**: Eliminamos un usuario por ID. Solamente lo puede hacer el Admin. La ruta de acceso será 
        ````
        /users/deleteprofile/:email
        ````

        <br>

    * **loansControllers.js**: En este archivo creamos las funciones de cada endpoint:
        * **allloans**: Obtenemos un listado de todos los pedidos realizados (securizado para que solo pueda acceder un administrador).La ruta de acceso será 
        ````
        /loans/alloans/
        ````

        <br>

        * **newloan**: Creamos un pedido nuevo. 
        
        Deberemos pasarle por el body:

        ````
        article
        ````

         Solamente hemos de pasarle que arículo queremos por el body ya que la información del usuario la tenemos en el token y la sacamos de ahí. 
         
         La ruta de acceso será 
        ````
        /loans/newloan/
        ````

        <br>

        * **myloans**: El usuario podrá ver su lista de pedidos. La ruta de acceso será 
        ````
        /loans/newloan/
        ````

        <br>

        * **modifyloan**: El usuario podrá modificar su pedido.
        
        Deberemos pasarle por body:
        
        ````
         articuloNuevo (Articulo por el que se cambia)
         articuloViejo (Artículo que se cambia) 
         ````

         La ruta de acceso será 
        ````
        /loans/modifyloan/
        ````



* **.env.example**: Muestra la configuración que debe tener el archivo .env que debe ser creado para que la aplicacion funcione
```
DB_USERNAME=USERNAME
DB_PASSWORD=PASSWORD
DB_DATABASE=DATABASE
DB_HOST=HOST
DB_PORT=PORT
DB_DIALECT=DIALECT
JWT_SECRET= SECRET
MAX_TIME_JWT_CADUCITY=MAX TIME TOKEN	
```

## Explicación de la securización de la API: 🔒
* Los usuarios que no estén logados pueden:
    * Ver todas las películas y series que tenemos en la base de datos.
    * Buscar películas y series por ID.
    * Buscar películas y series por título.
    * Buscar películas y series por genero.
    * Buscar las series que tienen un capítulo que va a ser emitido en los próximos 7 días.
    * Buscar las series que se van a emitir en cine
    * Registrarse
    * Acceder al login.

* Los usuarios logueados con rol 'usuario', además de poder hacer todo lo anteriormente mencionado, pueden:
    * Buscar los datos de su usuario.
    * Modificar solo su usuario.
    * Generar un nuevo pedido.
    * Modificar su pedido
    * Listar todos sus pedidos

* Los usuarios logueados con administrador, además de poder hacer todo lo anteriormente mencionado, pueden:
    * Ver toda la lista de usuarios.
    * Borrar un usuario
    * Listar todos los pedidos de todos los usuarios.


## Construido con 🛠️


* [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript) 
* [Sequelize](https://sequelize.org/) 
* [MySQL](https://www.mysql.com/) 
* [NodeJS](https://nodejs.org/es/)
* [ExpressJS](https://expressjs.com/)


## Autor ✒️


* **Héctor González** - [hectorgv00](https://github.com/hectorgv00)

## Licencia 📄

Este proyecto está bajo la Licencia [MIT License](https://github.com/hectorgv00/FSD-Proyecto2-Restaurante-Digital/blob/master/LICENSE)

## Gracias :D 🎁

* Comenta a otros sobre este proyecto 📢
* Da las gracias públicamente.