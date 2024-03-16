let numeroMaximo = 100;
let numeroSecreto;
let intentos;

let input = document.getElementById("valorUsuario");
input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        verificarIntento();
    }
});

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroUsuario === numeroSecreto) {
        switchJuego();
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos ===1) ? 'intento' : 'intentos'}`);
    }else if(numeroUsuario>numeroSecreto){
        asignarTextoElemento('p', 'El número secreto es menor');
        limpiarIntento();
    }else{
        asignarTextoElemento('p', 'El número secreto es mayor');
        limpiarIntento();
    }
    intentos++;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    return numeroGenerado;    
}

function nuevoJuego() {
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    mensajesIniciales();      
    switchJuego();
    limpiarIntento()
}

function limpiarIntento(){
    document.getElementById('valorUsuario').value = "";
    document.getElementById('valorUsuario').focus();
}

function mensajesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', 'Indica un número del 1 al '+numeroMaximo);
}

function switchJuego(){
    var inputIntento = document.getElementById('valorUsuario');
    var btnIntento = document.getElementById('btnIntento');
    var btnNuevo = document.getElementById('btnNuevo');

    btnIntento.disabled = !btnIntento.disabled;
    btnNuevo.disabled = !btnNuevo.disabled;
    inputIntento.disabled = !inputIntento.disabled;
}

nuevoJuego();


