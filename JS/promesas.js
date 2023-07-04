console.clear();
//las promesas nos sirven cuando tengo varios procesos asincronos entonces evito el callback hell
//evito el callback hell
function cuadradoPromise(value){
    if (typeof value !== "number") return Promise.reject(`el valor ingresado no es un numero`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                value,
                result: value * value
            });
        }, 0 | Math.random()*1000);
    });
}

cuadradoPromise(0)
    .then(obj => { //el then recive la parte positiva de la promesa: el resolve. y si vemos arriba en resolve construimos un objeto({})
        console.log(obj);
        console.log(`Inicio Promise`);
        console.log(`Promise: ${obj.value}, ${obj.result}`);
        return cuadradoPromise(1);
    })
    .then(obj => { 
        console.log(`Promise: ${obj.value}, ${obj.result}`);
        return cuadradoPromise(2);
    })
    .then(obj => { 
        console.log(`Promise: ${obj.value}, ${obj.result}`);
        return cuadradoPromise(3);
    })
    .then(obj => { 
        console.log(`Promise: ${obj.value}, ${obj.result}`);
        return cuadradoPromise(4);
    })
    .then(obj => { 
        console.log(`Promise: ${obj.value}, ${obj.result}`);
        return cuadradoPromise(5);
    })
    .catch(err => console.error(err));