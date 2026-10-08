const Node = require("./Node");

class Erp{
    #head;
    #tail;
    #length = 0;

    #arrayExcluido = [];

    append(value) {
        const novoNo = new Node(value);
    
        if (this.isEmpty()) {
          this.#head = novoNo;
          this.#tail = novoNo;
        } else {
          novoNo.prev = this.#tail;
          this.#tail.next = novoNo;
          this.#tail = novoNo;
        }
    
        this.#length++;
        return this;
      }

      removeLast() {
        if (this.isEmpty()) return undefined;
    
        const valor = this.#tail.value;
        this.#arrayExcluido.push(valor);
        if (this.#length === 1) {
          this.#head = undefined;
          this.#tail = undefined;
        } else {
          this.#tail = this.#tail.prev;
          this.#tail.next = undefined;
        }


    
        this.#length--;
        return valor;
      }

      redo(indice){
        this.append(this.#arrayExcluido[indice]);
        this.#arrayExcluido.splice(indice, 1);
      }

      removerDefinitivamente(posicao) {
        if (posicao < 0 || posicao >= this.#arrayExcluido) {
            console.log("Insira um número de posição válido");
            return undefined;
        }
        const removido = this.#arrayExcluido[posicao];
    
        for (let i = posicao; i < this.#arrayExcluido.length; i++) {
    
            this.#arrayExcluido[i] = this.#arrayExcluido[i + 1];
        }
       this.#arrayExcluido.splice(posicao, 1);
        return removido;
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
      size() {
        return this.#length;
      }
    
      isEmpty() {
        return this.#length === 0;
      }
    
      toString() {
        return this.traverse().join(' <-> ');
      }

      toTable(){
        console.table(this.#arrayExcluido);
      }
}
module.exports = Erp;