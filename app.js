async function enviar(){

const input = document.getElementById("mensaje");
const chat = document.getElementById("chat");

if(!input.value) return;

chat.innerHTML += `
<div class="message user">${input.value}</div>
`;

const res = await fetch("/kronos",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
message:input.value
})
});

const data = await res.json();

chat.innerHTML += `
<div class="message kronos">${data.reply}</div>
`;

chat.scrollTop = chat.scrollHeight;

input.value="";
}agregarMemoria(texto);
