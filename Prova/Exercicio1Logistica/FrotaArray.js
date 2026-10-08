class FrotaArray{
    #items = [];
    #tamanho = 0;
  

    constructor(placa, motorista, carga, dataChegada){
        this.placa = placa;
        this.motorista = motorista;
        this.carga = carga;
        this.dataChegada = dataChegada;
    }

    adicionar(placa, motorista, carga, dataChegada){
        this.#items [this.#tamanho] = new FrotaArray(placa, motorista, carga, dataChegada);
        this.#tamanho++;
        }

        remover(){
                if(this.#tamanho === 0){
                    return undefined
                }
                const ultimoItem = this.#items[this.#tamanho - 1];
        
                delete this.#items[this.#tamanho - 1];
        
                this.#tamanho--;
        
                return ultimoItem;
            }
 
    obterIndicePlaca(placa){
        let indice_encontrado = -1;
        for (let i = 0; i < this.#tamanho; i++) {
           if(this.#items[i]["placa"] === placa){
            indice_encontrado = i;
            break;
           }    
        }
        return indice_encontrado;
    }

        removerIndice(posicao) {
    if (posicao < 0 || posicao >= this.#tamanho) {
        console.log("Insira um número de posição válido");
        return undefined;
    }
    const removido = this.#items[posicao];

    for (let i = posicao; i < this.#tamanho - 1; i++) {

        this.#items[i] = this.#items[i + 1];
    }
    delete this.#items[this.#tamanho - 1];
    this.#tamanho--;
    return removido;
}

    removerPorPlaca(placa){
        const indice = this.obterIndicePlaca(placa);
        if (indice === -1) {
            return undefined;
        }
        return this.removerIndice(indice);
    }
    toString(){
        console.table(this.#items);
        }
}

module.exports = FrotaArray;