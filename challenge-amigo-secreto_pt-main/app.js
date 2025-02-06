let listaDeAmigos = [];

function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nomeAmigo = input.value.trim(); // .trim() - Remove espaços em branco do início e fim

    if (nomeAmigo === "") {
        alert("Por favor, digite um nome válido.");
        return;
    }

    listaDeAmigos.push(nomeAmigo);
    input.value = "";
}

function sortearAmigo() {

    const indiceSorteado = Math.floor(Math.random() * listaDeAmigos.length);// Math.random - Gera um índice aleatório; Math.floor - Arredonda o valor decimal para um inteiro mais próximo
    const nomeSorteado = listaDeAmigos[indiceSorteado]; 
    
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerText = `O nome sorteado foi ${nomeSorteado}`;
}



