console.clear();

console.log(window);
alert("Hola esto es una alerta");
confirm("Esto es una confirmacion");
prompt("Hola esto es un aviso y le permite al usuario ingresar un valor");

//si guardo en variables:
alerta = alert("Hola esto es una alerta");
confirmacion = confirm("Esto es una confirmacion"); //si toco en aceptar se guarda true en alerta, si toco en cancelar se guarda false en alerta
aviso = prompt("Hola esto es un aviso y le permite al usuario ingresar un valor"); //si escribo algo se guarda lo que escribo en mi variable aviso, si escribo pero cancelo se guarda null

console.log(alerta);
console.log(confirmacion);
console.log(aviso);