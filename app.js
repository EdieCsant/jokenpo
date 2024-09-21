//            0     1     2     3
let nipes = ["✊", "✋", "✌", "😎"];
//            0    1    2    3    4    5    6    7    8     9    10    11    12
let faces = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"];

let interval;

function sortear() {
    // Lógica principal do sorteio da carta
    let nipe = nipes[Math.floor(Math.random() * nipes.length)];
    let face = faces[Math.floor(Math.random() * faces.length)];

    // Renderizar o canto superior esquerdo da carta
    document.getElementById('centro').innerHTML = `<div class="some">${face}</div><div class="ico">${nipe}</div>`;
   
}

// Inicia o sorteio contínuo
function iniciarSorteio() {
    interval = setInterval(sortear, 120); // Atualiza a cada 120ms
}

// Para o sorteio contínuo
function pararSorteio() {
    clearInterval(interval);
}

// Inicia o sorteio ao carregar a página
iniciarSorteio();

// Adiciona evento de clique ao botão
document.getElementById('parasortearBtn').addEventListener('click', pararSorteio);
document.getElementById('inisortearBtn').addEventListener('click', iniciarSorteio);
