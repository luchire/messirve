/*
//funcion declarada:
function thisIsAFunction (){
    console.log("uno");
    console.log("dos");
    console.log("tres");
}

invocacion de funcion:
thisIsAFunction();

//funcion que devuelve un valor: uso return
function returnValueFunction(){
    console.log("uno");
    return 19;
}

let ValueFunction = returnValueFunction();
console.log(ValueFunction);

//funcion que recibe valores:

function saludar(nombre,edad) {
    console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años.`);

}
saludar("Luciana",25);
saludar(); //me devuelve undefined a menos que asigne valores por defecto a los parametros


//Funciones expresadas:
const funcionExpresada = function(){
    console.log("Esto es una funcion expresada, es decir, una funcion que se le ha asignado como valor a una variable");

}


//Arrow Functions:
const arrowFunction = () =>{
    console.log("hola soy una funcion flecha");
}
arrowFunction();
//funcion normal vs arrow function:
const sumar = function (a,b){
    return a + b;
}
const sumar = (a,b) => a + b;
console.log(sumar(5,5));

//arrow function de varias lineas:
const arrowFunctionVariasLineas = ()=>{
    console.log("uno");
    console.log("dos");
    console.log("tres");
}
arrowFunctionVariasLineas();
*/