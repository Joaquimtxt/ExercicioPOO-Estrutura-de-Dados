class FilaFaturas{
    #items = [];
    #tamanho = 0;
  

    constructor(valor, dataVencimento, banco, codigoBarras){
        this.valor = valor;
        this.dataVencimento = dataVencimento;
        this.banco = banco;
        this.codigoBarras = codigoBarras;
    }

    enqueue(valor, dataVencimento, banco, codigoBarras){
    
            this.#items [this.#tamanho] = new FilaFaturas(valor, dataVencimento, banco, codigoBarras);
            this.#tamanho++;
    }

    dequeue(){
        if(this.#tamanho === 0){
            return undefined
        }
        const primeiroFila = this.#items[0];

        delete this.#items[0];

        this.#tamanho--;

        return primeiroFila;
    }

    toString(){
        console.table(this.#items);
        }
}

module.exports = FilaFaturas;