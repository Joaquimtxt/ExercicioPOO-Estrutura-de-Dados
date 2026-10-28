import DoublyLinkedListNode from './DoublyLinkedListNode.js';

export default class DoublyLinkedList {
    #head = undefined;
    #tail = undefined;
    #length = 0;

    append(value) {
        const novo = new DoublyLinkedListNode(value);

        if (this.#head === undefined) {
            this.#head = novo;
            this.#tail = novo;
        } else {
            novo.prev = this.#tail;
            this.#tail.next = novo;
            this.#tail = novo;
        }

        this.#length++;
    }

    prepend(value) {
        const novo = new DoublyLinkedListNode(value);

        if (this.#head === undefined) {
            this.#head = novo;
            this.#tail = novo;
        } else {
            novo.next = this.#head;
            this.#head.prev = novo;
            this.#head = novo;
        }

        this.#length++;
    }

    removeFirst() {
        if (this.#head === undefined) {
            return undefined;
        }

        const removido = this.#head;
        this.#head = removido.next;

        if (this.#head === undefined) {
            this.#tail = undefined;
        } else {
            this.#head.prev = undefined;
        }

        removido.next = undefined;
        this.#length--;

        return removido.value;
    }

    removeLast() {
        if (this.#tail === undefined) {
            return undefined;
        }

        const removido = this.#tail;
        this.#tail = removido.prev;

        if (this.#tail === undefined) {
            this.#head = undefined;
        } else {
            this.#tail.next = undefined;
        }

        removido.prev = undefined;
        this.#length--;

        return removido.value;
    }

    insertAt(value, index) {
        if (index < 0 || index > this.#length) {
            console.log("Insira um número de posição válido");
            return;
        }

        if (index === 0) {
            this.prepend(value);
            return;
        }

        if (index === this.#length) {
            this.append(value);
            return;
        }

        let atual = this.#head;

        for (let i = 0; i < index; i++) {
            atual = atual.next;
        }

        const novo = new DoublyLinkedListNode(value);

        novo.prev = atual.prev;
        novo.next = atual;
        atual.prev.next = novo;
        atual.prev = novo;

        this.#length++;
    }

    indexOf(value) {
        let atual = this.#head;
        let indice = 0;

        while (atual !== undefined) {
            if (atual.value === value) {
                return indice;
            }
            atual = atual.next;
            indice++;
        }

        return -1;
    }

    removeAt(index) {
        if (index < 0 || index >= this.#length) {
            console.log("Insira um número de posição válido");
            return undefined;
        }

        if (index === 0) {
            return this.removeFirst();
        }

        if (index === this.#length - 1) {
            return this.removeLast();
        }

        let atual = this.#head;

        for (let i = 0; i < index; i++) {
            atual = atual.next;
        }

        atual.prev.next = atual.next;
        atual.next.prev = atual.prev;

        const removido = atual.value;

        atual.next = undefined;
        atual.prev = undefined;
        this.#length--;

        return removido;
    }

    removeByValue(value) {
        const indice = this.indexOf(value);

        if (indice === -1) {
            return undefined;
        }

        return this.removeAt(indice);
    }

    find(value) {
        let atual = this.#head;

        while (atual !== undefined) {
            if (atual.value === value) {
                return atual;
            }
            atual = atual.next;
        }

        return undefined;
    }

    traverse() {
        const valores = [];
        let atual = this.#head;

        while (atual !== undefined) {
            valores.push(atual.value);
            atual = atual.next;
        }

        return valores;
    }

    traverseReverse() {
        const valores = [];
        let atual = this.#tail;

        while (atual !== undefined) {
            valores.push(atual.value);
            atual = atual.prev;
        }

        return valores;
    }

    toArray() {
        return this.traverse();
    }

    size() {
        return this.#length;
    }

    isEmpty() {
        return this.#length === 0;
    }

    toString() {
        let atual = this.#head;
        let lista = "";

        while (atual !== undefined) {
            lista += atual.value + " <-> ";
            atual = atual.next;
        }

        console.log(lista + "undefined");
    }

    // ---------- Compatibilidade com o benchmark ----------

    /** Inserir no fim. */
    insert(value) {
        this.append(value);
    }

    /** Informa se o valor existe. */
    search(value) {
        return this.find(value) !== undefined;
    }
}
