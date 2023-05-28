//CONDICIONALES
//if-else
//operador ternario: simplificacion del if-else:
/*operador ternario estructura: variable = (condicion) ? verdadero : falsa;
va la condicion que quiro q se cumpla, el ? y al lado lo q quiero q pase si esa condicion es verdadera,
los : y lo que quiero q pase si la condicion es falsa. solo me sirve para una linea de codigo*/

//con if else
var edad = 17;
if(edad >= 18 ) {
    console.log("sos mayor de edad!");
} else {
    console.log("sos menor de edad!");
}
//con operador ternario:
var mayorEdad = (edad >= 18) ? "sos mayor de edad!" : "sos menor de edad!";
console.log(mayorEdad);

//switch-case:
/* switch(key){
    case (0): 
    break;
    case (1): 
    break;
    default; //cdo no entra en ningun case va al default
}*/
