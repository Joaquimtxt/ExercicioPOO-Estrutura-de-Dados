const Node = require('./No.js');

class DoublyLinkedList {
    #head = undefined;
    #tail = undefined;
    #length = 0;

    append(value) {
        const newNode = new Node(value);
        if (this.#head === undefined) {
            this.#head = newNode;
            this.#tail = newNode;
        } else {
            this.#tail.next = newNode;
            newNode.prev = this.#tail;
            this.#tail = newNode;
        }
        this.#length++;
    }

    removeByValue(value) {
        if (this.#head === undefined) return; 

        let current = this.#head;


        while (current !== undefined && current.value !== value) {
            current = current.next;
        }

        if (current === undefined) return; 


        if (this.#length === 1) {
            this.#head = undefined;
            this.#tail = undefined;
        } 

        else if (current === this.#head) {
            this.#head = current.next;
            this.#head.prev = undefined;
        } 

        else if (current === this.#tail) {
            this.#tail = current.prev;
            this.#tail.next = undefined;
        } 

        else {
            current.prev.next = current.next;
            current.next.prev = current.prev;
        }
        
        this.#length--;
    }


    find(value) {
        let current = this.#head;
        while (current !== undefined) {
            if (current.value === value) {
                return current; 
            }
            current = current.next;
        }
        return undefined;
    }

    toArray() {
        let arrayTemporario = []; 
        let current = this.#head;
        
        while (current !== undefined) {
            arrayTemporario.push(current.value);
            current = current.next;
        }
        
        return arrayTemporario;
    }

    toString() {
        let current = this.#head;
        let list = '';
        while (current !== undefined) {
            list += current.value + ' <-> ';
            current = current.next;
        }
        console.log(list + 'undefined');
    }
}
module.exports = DoublyLinkedList;