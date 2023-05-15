function filterUrgentFunc (e) {
    if(urgentFilter.checked) { 
        if(e.urgent){
            return true;
        } else {
            return false;
        }
    } else {
        return true;
    }
}
// SI UN if RETORNA, MUCHAS VECES NO HACE FALTA EL else
function filterUrgentFunc (e){
    if(urgentFilter.checked) { 
        if(e.urgent){
            return true;
        }
        return false;
    } else {
        return true;
    }
}
// NO VALE LA PENA EVALUAR EN IFs PARA RETORNAR TRUE O FALSE
function filterUrgentFunc (e){
    if(urgentFilter.checked) { 
        return e.urgent;
    } else {
        return true;
    }
}
// PENSAR SI HAY MANERA DE USAR LOGICA ARITMETICA
function filterUrgentFunc (e){
    return !urgentFilter.checked || e.urgent;
}
// PODEMOS INCLUIR EL FILTRO DE TEXTO (por hacer)
function filterFunc (e){
    return (!urgentFilter.checked || e.urgent) && (true);
}
// SI LO TRANSFORMAMOS EN FUNCION FLECHA PODEMOS SACAR LAS LLAVES
const filterFuncFlecha  = (e) => (!urgentFilter.checked || e.urgent) && (true);