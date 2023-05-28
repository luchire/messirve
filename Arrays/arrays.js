//un arreglo: coleccion de elementos. van con []

const a = [];
const b = [1, true, "Hola", ["A","B","C",[1,2,3]]];
console.log(a);
console.log(b);
console.log(b.length); //devuelve cantidad de elementos del arreglo
console.log(b[2]); //imprimo solo la palabra hola 
console.log(b[3][2]); //imprimo solo la letra C del arreglo de la posicion 3 del arreglo b
console.log(b[3][3][1]); //imprimo el numero 2 del arreglo b

//otras formas de crear arreglos:
const c = Array.of("A","B","C",1,2,3);
console.log(c);

const d = Array(100).fill(false); //creo un arreglo de 100 posiciones con el elemento false
console.log(d);

//METODOS:
const colores = ["rojo","verde","azul"];
console.log(colores);

//agrego un elemento al final
colores.push("negro"); 
console.log(colores);

//quito un elemento del final
colores.pop();  
console.log(colores);

//FOR EACH: ejecuto una funcion por cada elemento del arreglo
colores.forEach(function (el, index){
    console.log(`<li id="${index}">${el}</li>`);
})