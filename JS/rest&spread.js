//Parámetros REST y Operadores SPREAD

//////// PARAMETROS REST ////////

//Forma de virtualmente ir agregando parametros infinitos a una funcion o variable, por ejemplo tengo una funcion y no se cuantos valores voy a recibir y despues los tengo que usar para hacer alg
//para definir un parametro rest tengo que anteponer tres puntos: "..." ej:

function sumar(a,b,...c){
    var resultado = a + b;
    c.forEach(function(n){  // c va a ser un arreglo y uso forEach donde recibo una funcion que se va a ejecutar por cada elemento que venga dentro de c
        resultado += n;
    });

    return resultado;
}

console.log(sumar(1,2)); // devuelve a+b
console.log(sumar(1,2,3)); // devuelve a+b+c
console.log(sumar(1,2,3,4)); // devuelve a+b+c+d

//basicamente al definir como parametro rest puedo incorporar despues muchos valores 


/////// OPERADORES SPREAD //////

//lo mismo que rest pero rest son parametros de una funcion y estos son operadores que se ejecutan en una linea de nuestro codigo
//ej:

const arr1 = [1,2,3,4,5],
    arr2 = [6,7,8,9,0];

console.log(arr1,arr2);

//si tuviera que crear un arreglo 3 (arr3) a partir de estos dos arreglos:
const arr3 = [arr1, arr2];
console.log(arr3); //devuelve un array con dos arrays adentro: [array1,array2]
//si hago:
const arr4 = [...arr1, ...arr2];
console.log(arr4); //obtengo [1,2,3,4,5,6,7,8,9,0]