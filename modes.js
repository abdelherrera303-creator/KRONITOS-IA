let modoActual="original";

function cambiarModo(modo){
modoActual=modo;
guardarMemoria("modo",modo);
}

function obtenerModo(){
return leerMemoria("modo") || "original";
}
