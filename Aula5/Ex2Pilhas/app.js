const Pilha = require("./Pilha.js");

const bau = new Pilha();

console.log(`O baú está vazio? ${bau.estaVazia()? "Sim" : "Não"}`);

bau.adicionar(`Moedas de Ouro`);
bau.adicionar(`Diamante`);
bau.adicionar(`Prata`);


console.log(`Tesouros guardados!`);

console.log(`Quantidade de tesouros: ${bau.tamanhoPilha()}`);

console.log(`Último tesouro guardado: ${bau.topo()}`);

console.log(`Tesouro retirado: ${bau.remover()}`);
console.log(`Novo tesouro no topo: ${bau.topo()}`);

console.log(  `Quantidade restante: ${bau.tamanhoPilha()}`);

console.log(`O baú está vazio? ${bau.estaVazia()? "Sim" : "Não"}`);