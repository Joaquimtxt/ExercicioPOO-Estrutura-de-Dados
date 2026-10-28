import LinkedListNode from './LinkedListNode.js';


export default class LinkedList {
    #head = undefined;
    #tail = undefined;
    #length = 0;

    insertAtBeginning(value) {
        const novo = new LinkedListNode(value);

        novo.next = this.#head;
        this.#head = novo;

        if (this.#tail === undefined) {
            this.#tail = novo;
        }

        this.#length++;
    }

    insertAtEnd(value) {
        const novo = new LinkedListNode(value);

        if (this.#head === undefined) {
            this.#head = novo;
            this.#tail = novo;
        } else {
            this.#tail.next = novo;
            this.#tail = novo;
        }

        this.#length++;
    }

   
    removeByValue(value) {
        if (this.#head === undefined) {
            return undefined;
        }

        let anterior = undefined;
        let atual = this.#head;

        while (atual !== undefined && atual.value !== value) {
            anterior = atual;
            atual = atual.next;
        }

        if (atual === undefined) {
            return undefined; // valor não encontrado
        }

        if (anterior === undefined) {
            // removendo a cabeça
            this.#head = atual.next;
        } else {
            anterior.next = atual.next;
        }

        if (atual === this.#tail) {
            this.#tail = anterior;
        }

        atual.next = undefined;
        this.#length--;

        return atual.value;
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

    size() {
        return this.#length;
    }

    isEmpty() {
        return this.#length === 0;
    }

    toArray() {
        const valores = [];
        let atual = this.#head;

        while (atual !== undefined) {
            valores.push(atual.value);
            atual = atual.next;
        }

        return valores;
    }

    toString() {
        let atual = this.#head;
        let lista = "";

        while (atual !== undefined) {
            lista += atual.value + " -> ";
            atual = atual.next;
        }

        console.log(lista + "undefined");
    }

    // ---------- Compatibilidade com o benchmark ----------


    insert(value) {
        this.insertAtEnd(value);
    }


    search(value) {
        return this.find(value) !== undefined;
    }
}
