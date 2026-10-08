const FrotaArray = require("./FrotaArray");

const frota = new FrotaArray();

frota.adicionar("FNW-3344", "Joaquim", "Óleo", "01/10/2026");

frota.adicionar("FNW-3344", "Joca", "Óleos", "01/09/2026");

frota.toString();

console.log("Elemento removido: ", frota.remover());

console.log("Índice pela placa: ", frota.obterIndicePlaca("FNW-3344"));

frota.toString();

frota.adicionar("FNW-3344", "Joca", "Óleos", "01/09/2026");

frota.adicionar("BQA-2094", "Joca", "Óleos", "01/09/2026");

frota.toString();

console.log("Item Removido", frota.removerIndice(0));

frota.toString();

console.log("Item removido: ", frota.removerPorPlaca("BQA-2094"));

frota.toString();

console.log("Item removido: ", frota.removerPorPlaca("2345")); //Resultado undefined