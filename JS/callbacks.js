console.clear();
//Callbacks: son funciones que se ejecutan cuando se completa una operacion asincrona

//creo una funcion que eleva un numero al cuadrado. la asincronia la voy a simular con un setTimeout
function cuadradoCallback(value, callback){
    setTimeout(() => {
        callback(value, value*value);
    }, 0 | Math.random()*100);
}

cuadradoCallback(0, (value, result) => {
    console.log("Inicia Callback");
    console.log(`Callback: ${value}, ${result}`);
    cuadradoCallback(1, (value,result) => {
        console.log(`Callback: ${value}, ${result}`);
    });
});
