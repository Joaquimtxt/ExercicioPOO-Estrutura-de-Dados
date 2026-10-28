export default class Fila {
    #items = [];

    enqueue(elemento) {
        this.#items.push(elemento);
    }

    dequeue() {
        if (this.#items.length === 0) {
            return undefined;
        }
        return this.#items.shift();
    }

    front() {
        if (this.#items.length === 0) {
            return undefined;
        }
        return this.#items[0];
    }

    estaVazia = () => this.#items.length === 0;

    tamanho = () => this.#items.length;

    limpar() {
        this.#items = [];
    }

    mostrarFila() {
        console.log("Índice | Valor");
        console.log("-------------------------");

        this.#items.forEach((item, indice) => {
            console.log(`${indice} | ${item}`);
        });
    }

    // ---------- Compatibilidade com o benchmark ----------

    /** Enfileirar. */
    insert(elemento) {
        this.enqueue(elemento);
    }

    search(elemento) {
        return this.#items.includes(elemento);
    }
}
