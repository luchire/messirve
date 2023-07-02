//POO: Programacion Orientada a Objetos
/*
Clases: es un modelo a seguir. para el nombre uso UpperCamelCase 
Objetos: es una instancia de una clase. una copia de ese modelo. para su nombre uso LowerCamelCase
    Atributos: es una caracteristica o propiedad del objeto (son variables dentro de un objeto)
    Metodos: son las acciones que un objeto puede realizar (son funciones dentro de un objeto)
*/

//Funcion constructora
//como es una clase va con uppercamelcase, y tanto los atributos como los metodos van con el this.
/*function Animal(nombre, genero){
    //Atributos
    this.nombre = nombre;
    this.genero = genero;

    //Metodos
    this.sonar = function(){
        console.log("Hago sonidos porque estoy vivo");
    }
}

const snoopy = new Animal("Snoopy","Macho");
const lolaBunny = new Animal("Lola","Hembra");

console.log(snoopy);
console.log(lolaBunny);

snoopy.sonar();
lolaBunny.sonar();
*/

//una mejor forma es sacar los metodos fuera de la funcion constructora para que no se duplique la funcion en cada animal cuando agrego uno y mejora el rendimiento y memoria:
//funcion constructora donde asignamos los metodos al prototipo, no a la funcioin como tal
function Animal(nombre, genero){
    //Atributos
    this.nombre = nombre;
    this.genero = genero;

}
//Metodos agregados al prototipo de la funcion constructora
Animal.prototype.sonar = function(){
    console.log("Hago sonidos porque estoy vivo");
}

//Herencia Prototipica
function Perro(nombre, genero, tamaño){
    this.super = Animal;
    this.super(nombre, genero);
    this.tamaño = tamaño;
}

//Perro esta heredando de Animal
Perro.prototype = new Animal();
Perro.prototype.constructor = Perro;

//Sobreescritura de metodos del prototipo padre en el hijo
Perro.prototype.sonar = function(){
    console.log("Soy un perro y mi sonido es un ladrido");
}

Perro.prototype.ladrar = function(){
    console.log("Guauu Guauu!!");
}


const snoopy = new Animal("Snoopy","Macho", "Mediano");
const lolaBunny = new Animal("Lola","Hembra","Mediano");

console.log(snoopy);
console.log(lolaBunny);

snoopy.sonar();
lolaBunny.sonar();