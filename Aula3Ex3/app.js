const MeuArray = require("./MeuArray");

const playlist = new MeuArray();

// Adicionando músicas na playlist
playlist.adicionar("Brad Paisley - She's Everything");
playlist.adicionar("Chris Stapleton - Millionarie");
playlist.adicionar("Riley Green - Worst Way");
playlist.adicionar("The White Buffalo - Home Is In Your Arms");

playlist.toString();

console.log(`A playlist tem ${playlist.tamanhoArray()} músicas.`);


// Buscando uma música
let musica1 = playlist.obterIndice("Chris Stapleton - Millionarie");

console.log(`A música buscada está na posição ${musica1}, e é a ${playlist.obterElemento(musica1)}`);


// Editando uma música
playlist.editar(1, "Chris Stapleton - You Should Probably Leave");

playlist.toString();

// Exercício 3

playlist.adicionar("Riley Green - Worst Way");
playlist.toString();
let duplicados = playlist.buscaDuplicados("Riley Green - Worst Way");
console.log("Posições onde a música está repetida:");
duplicados.toString();



playlist.inserir("Zach Bryan - Something In The Orange", 2);
playlist.toString();
console.log(`A playlist tem ${playlist.tamanhoArray()} músicas.`);

let musicaRemovidaIndice = playlist.removerIndice(2);
console.log(`A música removida foi: ${musicaRemovidaIndice}`);
playlist.toString();
console.log(`A playlist tem ${playlist.tamanhoArray()} músicas.`);


let musicaRemovidaValor = playlist.removerValor(
    "Riley Green - Worst Way"
);
console.log(`A música removida foi: ${musicaRemovidaValor}`);
playlist.toString();
console.log(`A playlist tem ${playlist.tamanhoArray()} músicas.`);

// Limpando a playlist
playlist.limpar();
playlist.toString();