
export default class MeuArray {
    #items = [];
    #tamanho = 0;

    adicionar(elemento) {
        this.#items.push(elemento);
        this.#tamanho = this.#items.length;
    }

    editar(indice, novoValor) {
        if (indice < 0 || indice >= this.#tamanho) {
            console.log("Insira um índice válido");
            return undefined;
        }
        this.#items[indice] = novoValor;
    }

    remover() {
        if (this.#tamanho === 0) {
            return undefined;
        }
        const removido = this.#items.pop();
        this.#tamanho = this.#items.length;
        return removido;
    }

    obterElemento(indice) {
        if (indice < 0 || indice >= this.#tamanho) {
            console.log("Insira um índice válido");
            return undefined;
        }
        return this.#items[indice];
    }

    obterIndice(elemento) {
        return this.#items.indexOf(elemento);
    }

    tamanhoArray = () => this.#tamanho;

    limpar() {
        this.#items = [];
        this.#tamanho = 0;
    }

    toString() {
        console.table(this.#items);
    }

    buscaDuplicados(elemento) {
        const posicoes = new MeuArray();

        this.#items.forEach((item, indice) => {
            if (item === elemento) {
                posicoes.adicionar(indice);
            }
        });

        return posicoes;
    }

    inserir(elemento, posicao) {
        if (posicao < 0 || posicao > this.#tamanho) {
            console.log("Insira um número de posição válido");
            return;
        }
        this.#items.splice(posicao, 0, elemento);
        this.#tamanho = this.#items.length;
    }

    removerIndice(posicao) {
        if (posicao < 0 || posicao >= this.#tamanho) {
            console.log("Insira um número de posição válido");
            return undefined;
        }
        const removido = this.#items.splice(posicao, 1);
        this.#tamanho = this.#items.length;
        return removido[0];
    }

    removerValor(elemento) {
        const indice = this.obterIndice(elemento);

        if (indice === -1) {
            return undefined;
        }

        return this.removerIndice(indice);
    }

    insert(elemento) {
        this.adicionar(elemento);
    }

    search(elemento) {
        return this.obterIndice(elemento) !== -1;
    }
}
