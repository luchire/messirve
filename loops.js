//CICLOS (LOOPS)
//WHILE, DO-WHILE

var contador = 0;
while (contador < 10){
    console.log(contador);
    contador++;
}

do{
    console.log("do while" + contador);
    contador ++;
} while (contador < 10);

//FOR
/*for (inicializacion de variable; condicion; decremento o incremento){
    sentencias que ejecuta el for
}*/

for(var i = 0; i < 10; i++){
    console.log("for " + i);
}

var numeros = [10,20,30,40,50,80,90];
for (var i = 0; i < numeros.length; i++){
    console.log(i);
}

/*for in, for of: for in me permite recorrer cada propiedad de un objeto,
mientras que for of me deja recorrer cada elementode un arreglo o todo lo que sea iterable*/

/*for (const key in object) {
}*/
const lu = {
    name: "luciana",
    lastname: "reche",
    age: 25
}
//dentro del for no puedo acceder a una propiedad del objeto con el punto, tengo q usar corchetes:
for (const i in lu) {
    console.log(`key: ${i}, value: ${lu[i]}`);
}

/*for (const iterator of object) {
}*/
for (const elemento of numeros) {
    console.log(elemento);
}

var cadena = "Hola Mundo";
for(const caracter of cadena){
    console.log(caracter);
}
