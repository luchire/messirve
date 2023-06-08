//validar todos los inputs de un formulario 
var textInputsForm = document.getElementsByClassName('nameInputForm');
var numTextInputsForm = textInputsForm.length; 

const validarInput = (e) => {
    console.log(e)
    
    if (expresiones.inputs.test(e.key)){
        console.log("escribiste bien!! :)");
    } else {
        console.log("escribi bien rey -.-");
        e.preventDefault();
    }
    

    //Si quiero validar todo el input 
    //console.log(e.target.value)
    
    if (expresiones.inputs.test(e.target.value)){
        console.log("escribiste bien!! :)");
    } else {
        console.log("escribi bien rey -.-");
        e.target.value = "";
    }
    
}

for (var i = 0; i < numTextInputsForm; i++) {
    textInputsForm[i].addEventListener('keyup', validarInput)
}

const expresiones = {
	inputs: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
}


//                                  
const formValidation = (e) => (e.text.includes(textInputsForm.value));

//
a = [1, 2, 3]

a.length
Array.isArray(a)