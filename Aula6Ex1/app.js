const LinkedList = require("./LinkedList.js");
const trilha = new LinkedList();

trilha.insertAtBeginning("Cachoeira");
trilha.insertAtEnd("Caverna");
trilha.insertAtEnd("Cano torto(Perigo constante)");
trilha.insertAtBeginning("Acampamento Base");
trilha.insertAtEnd("Mirante");

console.log("Trilha inicial:");
trilha.toString();

console.log("Removendo local perigoso");
trilha.removeByValue("Cano torto(Perigo constante)");
trilha.toString();

console.log("Buscando pelo Mirante na trilha...");
let buscaMirante = trilha.find("Mirante");
if (buscaMirante !== undefined) {
  console.log(`O ${buscaMirante.value} ainda faz parte da trilha.`);
} else {
  console.log("O Mirante não está mais na trilha.");
}
