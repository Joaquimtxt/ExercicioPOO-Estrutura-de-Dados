const FilaFatura = require("./FilaFaturas.js");

const fila = new FilaFatura();

fila.enqueue(20.00, "01/10/2026", "Sicredi", "173823");

fila.enqueue(1000.95, "21/09/2026", "Bradesco", "173824");

fila.enqueue(800.01, "21/09/2026", "Itau", "173825");

fila.toString();

console.log("Fatura a ser processada: ", fila.dequeue());

fila.toString();