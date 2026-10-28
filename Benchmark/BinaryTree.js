import BinaryTreeNode from './BinaryTreeNode.js';

export default class BinaryTree {
    #root = null;
    #tamanho = 0;

    insert(value) {
        const novo = new BinaryTreeNode(value);

        if (this.#root === null) {
            this.#root = novo;
            this.#tamanho++;
            return;
        }

        this.#insertNode(this.#root, novo);
    }

    #insertNode(node, newNode) {
        let atual = node;

        while (true) {
            if (newNode.value < atual.value) {
                if (atual.left === null) {
                    atual.left = newNode;
                    this.#tamanho++;
                    return;
                }
                atual = atual.left;
            } else {
                if (atual.right === null) {
                    atual.right = newNode;
                    this.#tamanho++;
                    return;
                }
                atual = atual.right;
            }
        }
    }

    search(value) {
        return this.#searchNode(this.#root, value);
    }

    #searchNode(node, value) {
        let atual = node;

        while (atual !== null) {
            if (value === atual.value) {
                return true;
            }
            atual = value < atual.value ? atual.left : atual.right;
        }

        return false;
    }

    inOrderTraverse(node = this.#root) {
        if (node !== null) {
            this.inOrderTraverse(node.left);
            console.log(node.value);
            this.inOrderTraverse(node.right);
        }
    }

    preOrderTraverse(node = this.#root) {
        if (node !== null) {
            console.log(node.value);
            this.preOrderTraverse(node.left);
            this.preOrderTraverse(node.right);
        }
    }

    postOrderTraverse(node = this.#root) {
        if (node !== null) {
            this.postOrderTraverse(node.left);
            this.postOrderTraverse(node.right);
            console.log(node.value);
        }
    }

    remove(value) {
        this.#root = this.#removeNode(this.#root, value);
    }

    #removeNode(node, value) {
        if (node === null) {
            return null;
        }

        if (value < node.value) {
            node.left = this.#removeNode(node.left, value);
            return node;
        }

        if (value > node.value) {
            node.right = this.#removeNode(node.right, value);
            return node;
        }

        if (node.left === null && node.right === null) {
            this.#tamanho--;
            return null;
        }

        if (node.left === null) {
            this.#tamanho--;
            return node.right;
        }

        if (node.right === null) {
            this.#tamanho--;
            return node.left;
        }

        const aux = this.#findMinNode(node.right);

        node.value = aux.value;
        node.right = this.#removeNode(node.right, aux.value);

        return node;
    }

    #findMinNode(node) {
        while (node.left !== null) {
            node = node.left;
        }
        return node;
    }

    printVisual(node = this.#root, prefix = "", isLeft = true) {
        if (node !== null && node !== undefined) {
            this.printVisual(node.right, prefix + (isLeft ? "│   " : "    "), false);
            console.log(prefix + (isLeft ? "└── " : "┌── ") + node.value);
            this.printVisual(node.left, prefix + (isLeft ? "    " : "│   "), true);
        }
    }

    height() {
        let altura = 0;
        const pilha = [[this.#root, 1]];

        while (pilha.length > 0) {
            const [no, nivel] = pilha.pop();

            if (no === null) {
                continue;
            }

            if (nivel > altura) {
                altura = nivel;
            }

            pilha.push([no.left, nivel + 1], [no.right, nivel + 1]);
        }

        return altura;
    }

    toArray() {
        const valores = [];
        const pilha = [];
        let atual = this.#root;

        while (atual !== null || pilha.length > 0) {
            while (atual !== null) {
                pilha.push(atual);
                atual = atual.left;
            }
            atual = pilha.pop();
            valores.push(atual.value);
            atual = atual.right;
        }

        return valores;
    }

    size() {
        return this.#tamanho;
    }

    isEmpty() {
        return this.#tamanho === 0;
    }
}
