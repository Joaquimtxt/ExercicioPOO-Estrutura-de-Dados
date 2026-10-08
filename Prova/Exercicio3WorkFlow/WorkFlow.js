const Node = require("./Node");

class WorkFlow{
  #head;
  #items = [];
  #length = 0;
  
    constructor(nome, email, departamento){
        this.nome = nome;
        this.email = email;
        this.departamento = departamento;
    }

    isEmpty() {
        return this.#length === 0;
      }

    insertAtEnd(nome, email, departamento) {
        const novoNo = new Node(nome);

        this.#items [this.#length] = new WorkFlow(nome, email, departamento);
    
        if (this.isEmpty()) {
          this.#head = novoNo;
          this.#length++;
          return this;
        }
    
        let atual = this.#head;
        while (atual.next !== undefined) {
          atual = atual.next;
        }
    
        atual.next = novoNo;
        this.#length++;
        return this;
      }
      

      toArray() {
        const valores = [];
        let atual = this.#head;
    
        while (atual !== undefined) {
          valores.push(atual.value );
          atual = atual.next;
        }
    
        return valores;
      }
    
      toString() {
        return this.toArray().join(' -> ');
      }

      toStringInfo(){
        console.table(this.#items);
        }
}
module.exports = WorkFlow;