console.clear();
console.log(Date());

var fecha = new Date();
console.log(fecha);
console.log(fecha.getDate()); //devuelve como numero el dia del mes
console.log(fecha.getDay()); //devuelve como numero el dia de la semana
console.log(fecha.getMonth()); //devuelve como numero el mes
console.log(fecha.getFullYear()); //devuelve el año 
console.log(fecha.getHours()); //obtengo horas
console.log(fecha.getMinutes()); //obtengo minutos
console.log(fecha.getSeconds()); //obtengo segundos
console.log(fecha.getMilliseconds()); //obtengo milisegundos

console.log(fecha.toString()); //como getdate
console.log(fecha.toDateString()); // Tu Jun 13 2023
console.log(fecha.toLocaleString()); // 13/6/2023 19:24:37
console.log(fecha.toLocaleDateString()); // 13/6/2023
console.log(fecha.toLocaleTimeString()); // 19:24:37
console.log(fecha.getTimezoneOffset()); 

console.log(fecha.getUTCDate());
console.log(fecha.getUTCHours());

console.log(Date.now()); //obtengo los milisegundos desde el 1 de enero de 1970

//tener en cuenta que los meses van de 0 a 11
var cumpleLuchire = new Date(1997,10,6);
console.log(cumpleLuchire);


////////Object math//////////////////
console.clear();
//es un objeto estatico entonces cada vez q lo quiera usar tengo que invocar directamente al objeto

console.log(Math);
console.log(Math.PI);
console.log(Math.abs(-7.8)); //devuelve el valor abs 
console.log(Math.ceil(7.2)); //redondea al entero mas alto (8)
console.log(Math.floor(7.8)); //redondea al entero mas bajo (7)
console.log(Math.round(7.2)); //redondea al entero mas cercano
console.log(Math.sqrt(81)); //devuelve la raiz cuadrada
console.log(Math.pow(2,5)); //devuelve la potencia
console.log(Math.sign(-6)); //devuelve 1 o -1 segun el sign del numero q le paso
console.log(Math.random()); //devuelve un num aleatorio entre 0 y 1
console.log(Math.random()*1000); 
console.log(Math.round(Math.random()*1000)); //devuelve un aleatorio de 0 a 1000 redondeado 
