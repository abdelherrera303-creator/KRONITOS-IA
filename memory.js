// KRONOS MEMORY CORE

function guardarMemoria(clave, valor){
localStorage.setItem(clave, JSON.stringify(valor));
}

function leerMemoria(clave){
return JSON.parse(localStorage.getItem(clave));
}

function agregarMemoria(texto){
let historial = leerMemoria("historial") || [];
historial.push(texto);
guardarMemoria("historial", historial);
}
