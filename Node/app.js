//MODULOS: funcionalidad organizada en uno o varios archivos JS que puede ser reutilizada en una app
//Ventajas: evitar repeticion de codigo, reutilizar codigo, es mas facil agregar una nueva funcionalidad o modificar el codigo

//importar un modulo: doy acceso a elementos y funciones que estan en otro modulo
//para importar un modulo tengo que exportarlo de otro

//exporto funcion saludo: 
//const saludos = require("./saludos.js"); //le asigno a una constante el modulo
//console.log(saludos.saludar("Luciana")); //a ese modulo (saludo) indico a que propiedad quiero acceder(slaudar) y lepaso el parametro que necesita(nombre)
//console.log(saludos.saludarHolaMundo());

//sintaxis de desestructuracion: me permite tomar ciertas propiedades de mi objeto js
//const {saludarHolaMundo} = require("./saludos.js");
//console.log(saludarHolaMundo());

//MODULOS BUILT-IN (incorporados)
/*console.log; console.warn; console.error
process
os
timers
fs: file system: para trabajar con archivos (leer modificar cambiar nombre, etc)
todos los metodos del modulo fs son asincronos. pero puedo elegir versiones sincronas de esos metodos agregando Sync al nombre 

const fs = require('fs');

console.log('Antes de leer el archivo...');

// Leer un archivo.

fs.readFile('index.html', 'utf-8', (err, contenido) => {
  if (err) {
    throw err;
  }
  console.log(contenido);
});

console.log('Despues de leer el archivo...');

// Cambiar el nombre de un archivo.

fs.rename('index.html', 'main.html', (err) => {
  if (err) {
    throw err;
  }
  console.log('Nombre cambiado exitosamente.');
});

console.log('Depues de cambiar el nombre del archivo...');

// Agregar contenido al final de un archivo. 
// Crear un archivo nuevo si no existe.

fs.appendFile('index.html', '<p>Hola</p>', (err) => {
  if (err) {
    throw err;
  }
  console.log('Archivo actualizado');
});

console.log('Depues de agregar contenido al archivo...');

// Reemplazar contenido del archivo. 
// Crear un archivo nuevo si no existe.

fs.writeFile('index.html', 'Contenido nuevo', (err) => {
  if (err) {
    throw err;
  }
  console.log('Contenido reemplazado exitosamente.');
});

console.log('Depues de reemplazar el contenido del archivo...');

// Eliminar archivos.

fs.unlink('main.html', (err) => {
  if (err) {
    throw err;
  }
  console.log('Archivo eliminado');
});

console.log('Depues de eliminar un archivo...');

// -------------------------
// Versiones sincronas.
// -------------------------

const archivo = fs.readFileSync('index.html', 'utf-8');

console.log(archivo);

fs.renameSync('index.html', 'main.html');

fs.appendFileSync('index.html', '<p>Hola</p>');

fs.writeFileSync('index.html', 'Contenido nuevo');

fs.unlinkSync('main.html');
*/


//npm: es el archivo de software mas grande del mundo que contiene paquetes que puedo instalar y usar con node
/*un paquete es un archivo o directorio descrito por un archivo package.json
un modulo es cualquier archivo o directorio en el directorio node_modules que puede ser importado con require(). se crea automaticamente
una dependencia es un paquete que otro paquete necesita para funcionar correctamente*/

/*
///////JSON A JS:

// Objeto JavaScript.
let infoCurso = {
  "titulo": "Aprende Node.js",
  "numVistas": 45642,
  "numLikes": 21123,
  "temas": [
    "JavaScript",
    "Node.js"
  ],
  "esPublico": true
};

console.log(infoCurso);
console.log(typeof infoCurso);

// Objeto -> Cadena de Caracteres en formato JSON. 
console.log("===== En formato JSON con JSON.stringify() =====");
let infoJSON = JSON.stringify(infoCurso);

console.log(infoJSON);
console.log(typeof infoJSON);

// undefined porque ya no es un objeto, es una cadena
// de caracteres con el formato JSON.
console.log(infoJSON.titulo);

// Cadena de caracteres en formato JSON -> Objeto.
// Nuevamente creamos un objeto de JavaScript.
console.log("===== Objeto de JavaScript con JSON.parse() =====");
let infoObjeto = JSON.parse(infoJSON);

console.log(infoObjeto);
console.log(typeof infoObjeto);

// Ahora si tenemos un objeto de JavaScript.
console.log(infoObjeto.titulo);

*/
/*
//EVENTOS EN NODE
Accion que se realiza en la aplicacion . node esta basado en eventos asincronos 
Hay dos conceptos importantes: 
emitters (emisores): objetos que emiten eventos nombrados y llaman a funciones especificas. son instancias de la clase EventEmitter
tienen un metodo .on() para asociar una funcion al evento. y esa funcion se denomina EventHandler 
*/
/*
//modulo events: definir, emitir, escuchar
// primero incluyo el modulo
const EventEmitter = require("events");
//creamos una constante para crear nuestro emisor de eventos 
const emisorProductos = new EventEmitter();
emisorProductos.on("compra", () => {
     console.log("se realizo una compra");
});

emisorProductos.emit("compra"); //tomamos el emisor (emisorProductos) y digo que cuando ocurra una compra llamamos a emit y se ejecuta esa linea, va a ejecutar lo q le dije en emisorProductos.on()

//podria definir parametros en la funcion flecha tb:
emisorProductos.on("compra", (total) => {
     console.log(`se realizo una compra por $${total}`);
});

emisorProductos.emit("compra", 500); //tomamos el emisor (emisorProductos) y digo que cuando ocurra una compra llamamos a emit y se ejecuta esa linea, va a ejecutar lo q le dije en emisorProductos.on()

*/
//PROMESAS EN JS
//Objeto que representa el eventual resultado o error de una operacion asincrona
//una promesa es un OBJETO de js. y ese objeto se asocia a una callback function
//las promesas tienen un metodo .then(), con el cual podemos decidir que ocurre cuando se completa la promesa (exito o error)

//creamos una promesa:
/*const promesaCumplida = true;
const miPromesa = new Promise ((resolve, reject) => {
    setTimeout(()=>{
        if(promesaCumplida){
            resolve ("Promesa cumplida");
        } else {
            reject("Promesa rechazada");
        }
    }, 3000);
})

miPromesa.then((valor) => {  //esta funcion se asocia solo para el caso de exito o sea el resolve
    console.log(valor);
});

//entonces voy a definir dos funciones para manejar los dos casos: resolve y reject
const manejarPromesaCumplida = (valor) => {
    console.log(valor);
};

const manejarPromesaRechazada = (razonRechazo) => {
    console.log(razonRechazo);
};

miPromesa.then(manejarPromesaCumplida, manejarPromesaRechazada);
*/
/*
//ejemplo:
const estatusPedido = () => {
    const estatus = Math.random() < 0.8;
    console.log(estatus);
    return estatus;
};

const miPedidoDePizza = new Promise ((resolve, reject) => {
    setTimeout(() => {
        if(estatusPedido()) {
            resolve ("Pedido exitoso! su pizza esta en camino");
        } else {
            reject ("ocurrio un error.por favor intente nuevamente");
        }
    }, 3000);
});

const manejarPedidoExitoso = (mensajeDeConfirmacion) => {
    console.log(mensajeDeConfirmacion);
}
const rechazarPedido = (mensajeDeError) => {
    console.log(mensajeDeError);
}
miPedidoDePizza.then(manejarPedidoExitoso,rechazarPedido);

//podemos reescribirlo en menos codigo:

miPedidoDePizza
    .then((mensajeDeConfirmacion) => {
        console.log (mensajeDeConfirmacion)
    })
    .then(null, (mensajeDeError) => {
        console.log(mensajeDeError);
    });

//.catch(): metodo de promesa que solo se ejecuta si la promesa es rechazada
miPedidoDePizza
    .then((mensajeDeConfirmacion) => {
        console.log (mensajeDeConfirmacion)
    })
    .catch((mensajeDeError) => {
        console.log(mensajeDeError);
    });

miPedidoDePizza.then(manejarPedidoExitoso).catch(rechazarPedido);

//async / await
function ordenarProducto(producto) {
    return new Promise((resolve, reject) => {
      console.log(`Ordenando: ${producto} de freeCodeCamp.`);
      setTimeout(() => {
        if (producto === 'taza') {
          resolve('Ordenando una taza con el logo de freeCodeCamp...')
        } else {
          reject('Este producto no esta disponible actualmente.');
        }
      }, 2000);
    });
  }
  
  function procesarPedido(respuesta) {
    return new Promise((resolve, reject) => {
      console.log('Procesando respuesta...');
      console.log(`La respuesta fue: ${respuesta}`);
      setTimeout(() => {
        resolve('Gracias por tu compra. Disfruta tu producto de freeCodeCamp.');
      }, 4000);
    });
  }
  
  // Realizar procesos asincronos en orden 
  // al esperar que uno se complete antes que el otro inicie.
  
  ordenarProducto('taza')
    .then(respuesta => {
      console.log('Respuesta recibida');
      console.log(respuesta);
      return procesarPedido(respuesta);
    })
    .then(respuestaProcesada => {
      console.log(respuestaProcesada);
    })
    .catch(err => {
      console.log(err);
    });
  
  // Con async await hacemos lo mismo de forma mas concisa.
  // Una funcion asincrona retorna una promesa.
  
  async function realizarPedido(producto) {
    try {
      const respuesta = await ordenarProducto(producto);
      console.log('Respuesta recibida');
      console.log(respuesta);
      const respuestaProcesada = await procesarPedido(respuesta);
      console.log(respuestaProcesada);
    } catch (err) {
      console.log(err);
    }
  }
  
  realizarPedido('taza');
  // realizarPedido('lapiz');
*/
/*
  ////////////////////////////////
  //Primer servidor con node.js:
  const http = require("http");
  //creo una constante para almacenar el servidor.uso el metodo createServer, con el creo un servidor y cdo se lo llame va a ejecutar la funcion que le pase dentro de los ():
    const servidor = http.createServer((req, res) => {
      console.log("solicitud nueva")
      res.end("Hola Mundo"); //este metodo nos permite enviar una respuesta una vez que termina todo el proceso 
    });

  //puerto: ubicacion virtual del sis operativo en la cual se puede acceder a una app o a un proceso especifico que se este ejecutando en ese puerto. 
  //se usan numeros enteros positivos, en este caso usamos 3000
  
  //para que ese servidor que creamos  "escuche" nuestras solicitudes:
  const puerto = 3000;
  servidor.listen(puerto, () => {
    console.log(`el servidor esta escuchando en http://localhost:${puerto}`);
  });
  //para ejecutarlo primero ingreso al terminal y escribo node y el nombre de nuestro archivo, y luego entro al navegador y escribo: localhost:3000
*/

  ///////////////////////
  //MODULO URL: creo una URL
  //const miURL = new URL ("https://www.ejemplo.org/cursos/programacion?ordenar=vistas&nivel=1");
  //console.log(miURL.hostname); //www.ejemplo.org
  //console.log(miURL.pathname); // /cursos/programacion
  //console.log(miURL.searchParams); //URLSearchParams { 'ordenar' => 'vistas', 'nivel' => '1' }
  
  //ROUTING EN NODE.JS : manejar las solicitudes del cliente en base a ciertos criterios especificos (metodo y camino)
  //criterios: 1-Metodo: el metodo de la solicitud http. de esta forma el servidor sabe que tipo de operacion se realizara (GET, PUT, POST, DELETE)
  //           2-Path(camino): el path de la solicitud http. de esta forma el servidor sabe que recurso especifico se usara
  //una ruta se compone de metodo+path+como manejar esa solicitud
  //se usa expresspara routing pq es mas simple que con node



  ///////////////////////////
  //EXPRESS: Framework de Node. nos ayuda a desarrollar aplicaciones con node
  /*Conceptos basicos:
  CRUD: Operaaciones basicas que se puede realizar con una abse de datos.
  API: Interfaz de software que permite que dos apps se comuniquen entre si. no son usadaspor el usuario, sino por el programador que usa la api para implementar el programa. 
  es la conexion entre cliente y servidor */

  //primer proyecto con express (primera api)
  //primero creo la carpeta, abro new terminal y hago npm init y doy enter a todo, ahi se crea el archivo package.json
  //segundo instalo express con npm install express

const express = require("express"); //exportamos express con require. con esto creamos una app de express
const app = express(); //a esa funcoin express se la asigno a app
const {infoCursos} = require ("./cursos.js");

//routing
//app.get("/", (req,res)=>{})
app.get ("/", (req, res) => {
  res.send("mi primer servidor");
})
const PUERTO = process.env.PORT || 3000; //process.env.PORT CONSIGUE EL VALOR DEL PUERTO CDO NO ESTA DEFINIDO
app.listen(PUERTO, () => {
  console.log(`el servidor esta escuchando en el puerto http://localhost:${PUERTO}`);
})

app.get("/Node/cursos", (req, res) => {
  res.send(infoCursos);
  res.send(JSON.stringify(infoCursos));
})

app.get("/api/cursos/")