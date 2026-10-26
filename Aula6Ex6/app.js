const DoublyLinkedList = require("./DoublyLinkedList.js");
const listaDupla = new DoublyLinkedList();

listaDupla.append(10);
listaDupla.append(20);
listaDupla.append(30);
listaDupla.append(40);
console.log("Lista Inicial:");
listaDupla.toString();

console.log("Removendo os valores 30 e 10...");
listaDupla.removeByValue(30);
listaDupla.removeByValue(10);
listaDupla.toString();

console.log("Buscando pelo valor 40...");
let resultadoBusca = listaDupla.find(40);
if (resultadoBusca !== undefined) {
  console.log(`Valor encontrado: ${resultadoBusca.value}`);
} else {
  console.log(`Valor não encontrado.`);
}

console.log("Convertendo a Lista Duplamente Encadeada para Array:");
let meuArray = listaDupla.toArray();
console.log(meuArray);
