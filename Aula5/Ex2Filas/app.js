const Fila = require("./Fila.js");

const filaImpressao = new Fila();

console.log("Fila de impressão");

filaImpressao.enqueue("Trabalho", 5);
filaImpressao.enqueue("Relatório", 3);
filaImpressao.enqueue("Lista", 10);
filaImpressao.enqueue("Artigo", 7);
filaImpressao.enqueue("Resumo", 2);

filaImpressao.enqueue("Projeto", 12);

filaImpressao.mostrarFila();

console.log(`Quantidade de documentos: ${filaImpressao.tamanho()}`);


const primeiro = filaImpressao.front();

console.log(`Próximo documento: ${primeiro[0]}`);

console.log(`Quantidade de páginas: ${primeiro[1]}`);

console.log("Iniciando a impressão");

while (!filaImpressao.estaVazia()) {

    const documento = filaImpressao.front();
    console.log( `Imprimindo: ${documento[0]}`);

    console.log(`Páginas: ${documento[1]}`);

    filaImpressao.dequeue();

    console.log("Documento impresso e removido da fila.");
}

console.log("Todos os documentos foram impressos.");
console.log( "Fila vazia?",filaImpressao.estaVazia()? "Sim" : "Não");