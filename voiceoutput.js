// KRONOS VOICE OUTPUT

function kronosHablar(texto){

const voz = new SpeechSynthesisUtterance(texto);

voz.lang = navigator.language || "es-ES";
voz.pitch = 1;
voz.rate = 1;

speechSynthesis.speak(voz);

}
