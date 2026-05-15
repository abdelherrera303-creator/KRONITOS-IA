const reconocimiento = new webkitSpeechRecognition();

reconocimiento.lang="auto";
reconocimiento.continuous=true;

reconocimiento.onresult=(e)=>{
let voz=e.results[e.results.length-1][0].transcript;
respuestaKronos(voz);
}

function iniciarVoz(){
reconocimiento.start();
}
