
//creo un modulo llamado saludo
function saludar(nombre) {
    return `Hola, ${nombre}`;
}

//exporto la funcion:
//console.log(module.exports);
//module.exports.saludar = saludar;
//console.log(module.exports);

function saludarHolaMundo(){
    return `Hola Mundo`;
}
//module.exports.saludarHolaMundo = saludarHolaMundo;

//otra forma de exportar varios elementos:
module.exports = {
    saludar: saludar,
    saludarHolaMundo: saludarHolaMundo
};