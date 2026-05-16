// KRONOS VOICE OUTPUT

function kronosHablar(texto){

const voz = new SpeechSynthesisUtterance(texto);

voz.lang = navigator.language || "es-ES";
voz.pitch = 1;
voz.rate = 1;

speechSynthesis.speak(voz);

}// KRONOS LISTENING

const reconocimiento = new webkitSpeechRecognition();

reconocimiento.lang = navigator.language;
reconocimiento.continuous = true;

reconocimiento.onresult = async (event) => {

let texto = event.results[event.results.length-1][0].transcript;

document.getElementById("input").value = texto;

respuestaKronos(texto);

};

function iniciarEscucha(){
reconocimiento.start();
}
