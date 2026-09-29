class MeuArray {
    #items = [];
    #tamanho = 0;

    // adicionar(elemento){
    // this.#items [this.#tamanho] = elemento;
    // this.#tamanho++;
    // }
    
    //Função nativa push
    adicionar(elemento){
    this.#items.push(elemento);
    this.#tamanho = this.#items.length;
    }

    // editar(indice, novoValor){
    //     this.#items[indice]= novoValor;
    // }
     editar(indice, novoValor){
        if(indice < 0 || indice >= this.#tamanho){
            console.log("Insira um índice válido");
            return undefined;
        }
        this.#items[indice] = novoValor;
    }

    // remover(){
    //     if(this.#tamanho === 0){
    //         return undefined
    //     }
    //     const ultimoItem = this.#items[this.#tamanho - 1];

    //     delete this.#items[this.#tamanho - 1];

    //     this.#tamanho--;

    //     return ultimoItem;
    // }
    //Função Pop
     remover(){
        if(this.#tamanho === 0){
            return undefined
        }
        const removido = this.#items.pop();
        this.#tamanho = this.#items.length;
        return removido;
    }
    // obterElemento(indice){
    //     if(indice < 0 || indice >= this.#tamanho){
    //         return undefined;
    //     }
    //     return this.#items[indice];
    // }
    //Valor de uma posição
    obterElemento(indice){
        if(indice < 0 || indice >= this.#tamanho){
            console.log("Insira um índice válido");
            return undefined;
        }
        return this.#items[indice];
    }

    // obterIndice(elemento){
    //     let indice_encontrado = -1;
    //     for (let i = 0; i < this.#tamanho; i++) {
    //        if(this.#items[i] === elemento){
    //         indice_encontrado = i;
    //         break;
    //        }    
    //     }
    //     return indice_encontrado;
    // }

    //Função nativa indexOf
      obterIndice(elemento){
        return this.#items.indexOf(elemento);
    }

    //   buscaDuplicados(elemento)
    // {
    //     const posicoes_onde_tem_duplicado = new MeuArray();
    //     for (let i = 0; i < this.#tamanho; i++) {
    //         if (this.#items[i] === elemento) {
    //             posicoes_onde_tem_duplicado.adicionar(i);
    //         }
    //     }
    //     return posicoes_onde_tem_duplicado;
    // }
      buscaDuplicados(elemento) {

    const posicoes_onde_tem_duplicado = new MeuArray();

    this.#items.forEach((item, indice) => {

        if (item === elemento) {
            posicoes_onde_tem_duplicado.adicionar(indice);
        }

    });

    return posicoes_onde_tem_duplicado;
}


//     inserir(elemento, posicao) {

//     if (posicao < 0 || posicao > this.#tamanho) {
//         console.log("Insira um número de posição válido");
//         return;
//     }
//     for (let i = this.#tamanho; i > posicao; i--) {

//         this.#items[i] = this.#items[i - 1];
//     }
//     this.#items[posicao] = elemento;
//     this.#tamanho++;
// }
   inserir(elemento, posicao) {

    if (posicao < 0 || posicao > this.#items.length) {
        console.log("Insira um número de posição válido");
        return;
    }

    this.#items.splice(posicao, 0, elemento);

    this.#tamanho = this.#items.length;
}



//     removerIndice(posicao) {
//     if (posicao < 0 || posicao >= this.#tamanho) {
//         console.log("Insira um número de posição válido");
//         return undefined;
//     }
//     const removido = this.#items[posicao];

//     for (let i = posicao; i < this.#tamanho - 1; i++) {

//         this.#items[i] = this.#items[i + 1];
//     }
//     delete this.#items[this.#tamanho - 1];
//     this.#tamanho--;
//     return removido;
// }

 removerIndice(posicao) {
       if (posicao < 0 || posicao >= this.#items.length) {
        console.log("Insira um número de posição válido");
        return undefined;
    }
    const removido = this.#items.splice(posicao, 1);
    this.#tamanho = this.#items.length;
    return removido[0];
}



//  removerValor(elemento) {
//     const indice = this.obterIndice(elemento);
//     if (indice === -1) {
//         return undefined;
//     }
//     return this.removerIndice(indice);
// }
  removerValor(elemento) {
    const indice = this.obterIndice(elemento);
    if (indice === -1) {
        return undefined;
    }
    return this.removerIndice(indice);
}
    

    tamanhoArray = () => this.#tamanho;

    limpar(){
        this.#items = [];
        this.#tamanho = 0;
    }

    toString =  () => console.table(this.#items);
}


module.exports = MeuArray;