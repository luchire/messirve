console.clear();
/*
console.log("inicio");

setTimeout(() => {
    console.log("Ejecutando un setTimeout, esto se ejecuta una vez");

}, 3000);

setInterval(() => {
    console.log("Ejecutando un setInterval, esto se ejecuta indefinidamente cada cierto intervalo de tiempo");
}, 1000);
*/

//si quiero ejecutar un reloj en el navegador:

setInterval(() => {
    console.log(new Date().toLocaleTimeString());
}, 1000);

//puedo cancelar una funcion de setTimeout, guardandola previamente en una variable y ejecutando clearTimeout:
var temporizador = setTimeout(() => {
    console.log("Ejecutando un setTimeout, esto se ejecuta una vez");

}, 3000);

clearTimeout(temporizador);

var temporizador2 = setInterval(() => {
    console.log("Ejecutando un setInterval, esto se ejecuta indefinidamente cada cierto intervalo de tiempo");
}, 1000);

clearInterval(temporizador2);
