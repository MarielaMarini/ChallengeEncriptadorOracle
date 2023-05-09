const caracteresProhibidos =  /[A-Z~!@#$%^&*()_+|}{[\]\\\/?=><:"`;.,áéíóúàèìòù'0-9]/g;

function validar() {
    let nuevoMensaje = document.getElementById("inputTexto").value;

    if (nuevoMensaje.match(caracteresProhibidos) !=null){
        limpiar();
        foco();
        alert("Por favor, sólo texto en minúsculas y sin acentos");
    }
}

//LLaves de encriptacion
// `La letra "e" es convertida para "enter"`
// `La letra "i" es convertida para "imes"`
// `La letra "a" es convertida para "ai"`
// `La letra "o" es convertida para "ober"`
// `La letra "u" es convertida para "ufat"`

function encriptarTexto(){
    var texto=document.getElementById("inputTexto").value.trimStart();
    var textoEncriptado=texto.replace(/e/igm, "enter");
    var textoEncriptado=textoEncriptado.replace(/o/igm,"ober");
    var textoEncriptado=textoEncriptado.replace(/i/igm, "imes");
    var textoEncriptado=textoEncriptado.replace(/a/igm, "ai");
    var textoEncriptado=textoEncriptado.replace(/u/igm, "ufat");
    document.getElementById("candado").style.display="none";
    document.getElementById("texto").style.display="none";
    document.getElementById("texto2").innerHTML=textoEncriptado;
    document.getElementById("copiar").style.display="show";
    document.getElementById("copiar").style.display="inherit";
}

function desencriptarTexto(){
    var texto=document.getElementById("inputTexto").value.trimStart();
    var textoEncriptado=texto.replace(/enter/igm, "e");
    var textoEncriptado=textoEncriptado.replace(/ober/igm,"o");
    var textoEncriptado=textoEncriptado.replace(/imes/igm, "i");
    var textoEncriptado=textoEncriptado.replace(/ai/igm, "a");
    var textoEncriptado=textoEncriptado.replace(/ufat/igm, "u");
    document.getElementById("candado").style.display="none";
    document.getElementById("texto").style.display="none";
    document.getElementById("texto2").innerHTML=textoEncriptado;
    document.getElementById("copiar").style.display="show";
    document.getElementById("copiar").style.display="inherit";  
    
}

function copy(){
    texto2.select();
    navigator.clipboard.writeText(texto2.value)
    texto2e.value = "";
    alert("Texto Copiado");
    limpiar();
    foco();
}

function limpiar() {
    document.getElementById("inputTexto").value = "";
    document.getElementById("texto2").value = "";
}

function foco() {
    document.getElementById("inputTexto").focus();
}


function valiEnc(){
    validar();
    encriptarTexto();
}
function valiDesenc(){
    validar();
    desencriptarTexto();
}
