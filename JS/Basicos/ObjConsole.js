console.clear();

console.log(console);
console.error("esto es un error"); // lo escribe en rojo
console.warn("esto es un aviso"); // lo escribe en amarillo
console.info("esto es un mensaje informativo"); //devuelve similar al console.log
console.log("un registro de lo que ha pasado en nuestra app");

//ej:

var nombre = "Luciana",
    apellido = "Reche",
    edad = 25;

console.log(nombre); //Luciana
console.log(apellido); //Reche
console.log(edad); //25
console.log(nombre, apellido, edad); // Luciana Reche 25
console.log(`hola mi nombre es ${nombre} ${apellido} y tengo ${edad} años`); // Hola mi nombre es Luciana Reche y tengo 25 años
console.log(`hola mi nombre es %s %s y tengo %d años`, nombre, apellido, edad); // Hola mi nombre es Luciana Reche y tengo 25 años
console.clear(); //limpia la consola


console.log(window); // window es el objeto global y me muestra todas las propiedades del navegador 
console.log(document); //document es la representacion del html a traves de js. devuelve todo el contenido de mi html
console.dir(window); //similar al .log
console.dir(document); //me muestra todas las propiedades que tiene mi html

//podemos agrupar en la consola:
console.group("cursos de @jonmirha en youtube");
console.log("curso de js");
console.log("curso de node.js");
console.log("curso de ksdja");
console.log("curso de asjdhasj");
console.groupEnd();

console.clear();
//puedo representar en manera de tabla:
console.log(console);
console.table(Object.entries(console)); //me devuelve todo lo que contiene console pero en una tabla. tengo que usar le constructor Object y con entries genera una fila por cada propiedad
console.table(Object.entries(console).sort()); //como despues de hacer object.entries me lo convierte en arreglo, puedo usar sort y ordenarlo en orden alfabetico por ej

//si quisiera representar arreglos como una tabla:
const numeros = [1,2,3,4,5],
    vocales = ["a","e","i","o","u"];
console.table(numeros); //devuelve una tabla con posicion y valor
console.table(vocales);

//con un objeto
const perro = {
    nombre: "lola",
    raza: "bboxer",
    color: "cafe"
}
console.clear();
console.table(perro); // devuelve una tabla con index y valor como con los arreglos
console.log(Object.entries(perro)); //0: (2) ['nombre', 'lola'] etc etc etc

//para saber el tiempo que tarda en ejecutarse un bloque de codigo:
console.time("cuanto tiempo tarda mi codigo");
const arreglo = Array(1000000);

for(var i = 0; i<arreglo.length; i++){
    arreglo[i] = i;
}

console.timeEnd("cuanto tiempo tarda mi codigo");

//para saber cuantas veces se ejecuto un bloque de codigo:
for(var i=0; i<= 100; i++){
    console.count("codigo for");
    console.log(i);
}

//metodo para hacer testing a nuestro codigo:
var x = 1,
    y = 2,
    pruebaXY = "se espera que X siempre sea menor que Y";

console.assert(x < y, {x,y,pruebaXY}); //si lo dejo asi no pasa nada porque la prueba se ejecuta correctamente.si cambio x=3 salta un error en la consola
