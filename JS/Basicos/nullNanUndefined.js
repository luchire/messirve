/* NULL NAN UNDEFINED */
//Null y Undefined representan una variable que NO tiene valor, pero undefined es una variable que no ha sido inicializada ej: 
let indefinida;
console.log(indefinida); //devuelve undefined

//en cambio puedo crear una variable y asignarle el valor null ej: 
let nulo = null;
console.log(nulo); //devuelve null
/* De modo que voy a tener una variable vacia pero intencionalmente asignado por el programador, a diferencia
de undefined que lo asigna javascript.  */

//Nan : Not a Number
//js me devuelve NaN cuando hagamos operaciones y algun dato en cuestion no sea un numero ej:
let noEsUnNumero = "hola" * 3.7 ;
console.log(noEsUnNumero); //devuelve NaN