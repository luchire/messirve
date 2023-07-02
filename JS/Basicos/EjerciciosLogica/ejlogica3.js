console.clear();
/*
9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
*/

//9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

function getRandomNumber(min, max) {
    return console.log(Math.random () * (max - min) + min);
}

getRandomNumber(501, 600);

//10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

const numCapicua = (numero = 0) => {
    if (!numero) return console.warn ("no ingresaste ningun numero");

    numero = numero.toString();
    var numAlReves = numero.split("").reverse().join("");
    (numero === numAlReves) ? console.log(true) : console.log(false);
}

numCapicua();
numCapicua(2002);
numCapicua(200);

//11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
