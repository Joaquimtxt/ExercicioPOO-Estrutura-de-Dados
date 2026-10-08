class Fila {

    #items = [];
    #inicio = 0;
    #fim = 0;
    enqueue(nome, paginas) {
    if (this.tamanho() >= 5) {
        console.log("Fila cheia! Não é possível adicionar outro documento.");
        return;
    }
    this.#items[this.#fim] = [nome, paginas];
    this.#fim++;
}
    dequeue() {
        if (this.estaVazia()) {
            return undefined;
        }

        const documento = this.#items[this.#inicio];
        delete this.#items[this.#inicio];
        this.#inicio++;

        if (this.#inicio === this.#fim) {

            this.#items = [];

            this.#inicio = 0;

            this.#fim = 0;
        }
        return documento;
    }
    front() {

        if (this.estaVazia()) {
            return undefined;
        }

        return this.#items[this.#inicio];
    }

    estaVazia = () => this.#inicio === this.#fim;
    tamanho = () => this.#fim - this.#inicio;
    limpar() {

        this.#items = [];
        this.#inicio = 0;
        this.#fim = 0;
    }
    mostrarFila() {

        console.log("Índice | Nome | Páginas");
        console.log("-------------------------");

        for (let i = this.#inicio; i < this.#fim; i++) {

            console.log(
                `${i} | ${this.#items[i][0]} | ${this.#items[i][1]}`
            );
        }
    }
}


module.exports = Fila;