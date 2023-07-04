console.clear();

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
};

async function funcionAsyncDeclarada () {
    try {
        console.log("Inicio Async Function");
        
        var obj = await cuadradoPromise(0);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);
        
        obj = await cuadradoPromise(1);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);
    } catch(err) {
        console.error(err)
    }
};