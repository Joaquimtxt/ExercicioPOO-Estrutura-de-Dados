
export default class Pilha {
    #items = [];

    adicionar(elemento) {
        this.#items.push(elemento);
    }

    remover() {
     
        return this.#items.pop();
    }

    topo() {
        if (this.#items.length === 0) {
            return undefined;
        }
        return this.#items[this.#items.length - 1];
    }

    estaVazia = () => this.#items.length === 0;

    tamanhoPilha = () => this.#items.length;

    limpar() {
        this.#items = [];
    }

    // ---------- Compatibilidade com o benchmark ----------

    /** Empilhar. */
    insert(elemento) {
        this.adicionar(elemento);
    }

    search(elemento) {
        return this.#items.includes(elemento);
    }
}
