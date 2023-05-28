//OBJECTS
//dentro de un objeto a las variables se les llama atributos/propiedades
//y a las funciones se les llama metodos.
const person = {
    name: "Luciana",
    lastname: "Reche",
    age: 25,
    hobbies: ["voley", "sleep", "eat"],
    contact:{
        email: "lureche@mi.unc.edu.ar",
        number: "12345679"
    },
    hello: function (){
        console.log("hola :)")
    },
    sayMyName: function (){
        console.log(`Hola me llamo ${this.name} ${this.lastname} y tengo ${this.age} años`);
    }
}

console.log(person); //veo el objeto completo
console.log(person["name"]); //no se usa
console.log(person.name); 
console.log(person.hobbies[1]); //hobbies es un arreglo entonces accedo con corchetes a cada elemtno
console.log(person.contact.number); //como contact es un objeto accedo a cada elemnto con el punto
person.hello(); // como hello es una funcion directamente la llamo sin el console.log
person.sayMyName();

//METODOS
console.log(Object.keys(person)); //me devuelve una lista con  todos los elementos de mi objeto
console.log(Object.values(person)); //como el de arriba pero me devuelve los valores de cada elemento
console.log(person.hasOwnProperty["name"]); //me devuelve un true o false