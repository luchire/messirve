console.clear();
/* 
EJERCICIOS LOGICA DE PROGRAMACIÓN 1:
1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
*/

//1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

//funcion declarada:
/*
function contarCaracteres(cadena = ""){
    if (!cadena){
        console.warn("No ingresaste ninguna cadena");
    } else {
        console.info(`La cadena ${cadena} tiene ${cadena.length} caracteres`);
    }
}
*/
/*
//funcion expresada (guardada en una variable): si llamo a la funcion antes de expresarla me tira error a diferencia de las fc declaradas
const contarCaracteres = (cadena = "") => (!cadena)? console.warn("No ingresaste ninguna cadena") : console.info(`la cadena ${cadena} tiene ${cadena.length} caracteres`);

contarCaracteres();
contarCaracteres("Hola Mundo");

*/
//2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
/*
const recortarTexto = (cadena = "", longitud = undefined) => (!cadena || !longitud) ? console.warn("No ingresaste ninguna cadena") : console.log(`${cadena.slice(0,longitud)}`);

recortarTexto("Hola Mundo", 5);
recortarTexto();
recortarTexto("Hola Mundo");
*/

//3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
/*
const cadenaArreglo = (cadena = "", separador = undefined) => (!cadena || !separador) ? console.warn("No ingresaste ninguna cadena") : console.log(cadena.split(separador));

cadenaArreglo("Hola hola hola hola hola hola", " ");
cadenaArreglo("Hola hola hola hola hola hola", ",");
cadenaArreglo();
*/



//4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
/*
const repetirTexto = (texto = "", veces = undefined) =>{
    //validaciones:
    if(!texto) return console.warn ("No ingresaste texto");
    if(veces === undefined) return console.warn ("No ingresaste cantidad de veces");
    if(veces === 0) return console.error ("el numero de veces no puede ser cero");
    if(Math.sign(veces) === -1) return console.error ("el numero de veces no puede ser negativo");
    
    //func:
    for(var i = 1; i <= veces; i++) console.log(`${texto}, ${i}`);

}

repetirTexto("HOLA MUNDO", 4);
repetirTexto();
repetirTexto("HOLA MUNDO");
repetirTexto("HOLA MUNDO", 0);
repetirTexto("HOLA MUNDO", -20);
*/