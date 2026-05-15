// KRONOS AI FUSION SYSTEM

async function preguntarIA(mensaje){

const respuestas = [];

// --- GPT ---
try{
const gpt = await fetch("/api/gpt",{method:"POST",body:mensaje});
respuestas.push(await gpt.text());
}catch{}

// --- Gemini ---
try{
const gemini = await fetch("/api/gemini",{method:"POST",body:mensaje});
respuestas.push(await gemini.text());
}catch{}

// --- Claude ---
try{
const claude = await fetch("/api/claude",{method:"POST",body:mensaje});
respuestas.push(await claude.text());
}catch{}

// --- Perplexity ---
try{
const perplexity = await fetch("/api/perplexity",{method:"POST",body:mensaje});
respuestas.push(await perplexity.text());
}catch{}

// --- Grok ---
try{
const grok = await fetch("/api/grok",{method:"POST",body:mensaje});
respuestas.push(await grok.text());
}catch{}

// --- Meta AI ---
try{
const meta = await fetch("/api/meta",{method:"POST",body:mensaje});
respuestas.push(await meta.text());
}catch{}

// KRONOS decide la mejor respuesta
return fusionar(respuestas);
}

function fusionar(lista){
return lista.join("\n\n");
}
