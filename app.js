// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();
    
    if (nombre === "") {
        alert("Por favor ingresa un nombre válido");
        return;
    }
    
    amigos.push(nombre);
    input.value = "";
    
    actualizarLista();
}

function actualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    
    for (let i = 0; i < amigos.length; i++) {
        const item = document.createElement('li');
        item.textContent = amigos[i];
        
        lista.appendChild(item);;
    };
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear");
        return;
    }
    
    const indice = Math.floor(Math.random() * amigos.length);
    const ganador = amigos[indice];
    
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li class="result-item">¡El amigo secreto es: ${ganador}!</li>`;
}