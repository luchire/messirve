console.clear();
/*
5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
*/

//5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
/*
const invertirCadena = (cadena="") => (!cadena) ? console.warn("No ingresaste una cadena de texto") : console.log(cadena.split("").reverse().join(""));

invertirCadena();
invertirCadena("Hola Mundo");
*/

//6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
/*
const palabraRepetida = (texto = "", palabra = "") => {
    if (!texto) return("Faltó ingresar texto");
    if (!palabra) return("Faltó ingresar palabra a buscar");

    var contador = 0;
    var i = 0;

    while(i !== -1) {   //distinto de -1 porque voy a usar el metodo indexOf que devuelve -1 cuando no encuentra una palabra en un texto
        i = texto.indexOf(palabra,i);
        if(i !== -1){
            i++ 
            contador++
        }
    }

    return console.log(`la palabra ${palabra} se repite ${contador} veces`)
  
}

palabraRepetida("hola mundo, adios mundo, mundo, cuantas veces dije mundo?", "mundo");
*/

//7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.