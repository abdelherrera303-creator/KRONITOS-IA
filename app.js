async function enviar(){

const input = document.getElementById("mensaje");
const chat = document.getElementById("chat");

if(!input.value) return;

const mensajeUsuario = input.value;

// mostrar mensaje usuario
chat.innerHTML += `
<div class="message user">${mensajeUsuario}</div>
`;

input.value="";

// mensaje pensando
chat.innerHTML += `
<div class="message kronos">Kronos pensando...</div>
`;

chat.scrollTop = chat.scrollHeight;

try{

const res = await fetch("/kronos",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
message:mensajeUsuario
})
});

const data = await res.json();

// borrar "pensando"
chat.lastElementChild.remove();

// mostrar respuesta
chat.innerHTML += `
<div class="message kronos">${data.reply}</div>
`;

// 🔊 KRONOS HABLA
kronosHablar(data.reply);

// 🧠 guardar memoria
agregarMemoria(mensajeUsuario);

chat.scrollTop = chat.scrollHeight;

}catch(error){

chat.innerHTML += `
<div class="message kronos">Error conectando con Kronos...</div>
`;

console.error(error);

}

}
