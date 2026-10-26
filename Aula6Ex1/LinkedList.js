const Node = require("./No.js");

class LinkedList {
  #head = undefined;
  #length = 0; 

  insertAtBeginning(value) {
    let newNode = new Node(value);
    newNode.next = this.#head;
    this.#head = newNode;
    this.#length++;
  }

  insertAtEnd(value) {
    let newNode = new Node(value);
    if (this.#head === undefined) {
      this.#head = newNode;
    } else {
      let current = this.#head;
      while (current.next !== undefined) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.#length++;
  }

  removeByValue(value) {
    if (this.#head === undefined) return;

    if (this.#head.value === value) {
      this.#head = this.#head.next; 
      this.#length--;
      return;
    }

    let current = this.#head;
    while (current.next !== undefined && current.next.value !== value) {
      current = current.next;
    }

    if (current.next !== undefined) {
      current.next = current.next.next;  
      this.#length--;
    }
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

  toString() {
    let current = this.#head;
    let list = "";
    while (current !== undefined) {
      list += current.value + " -> ";
      current = current.next;
    }
    console.log(list + "undefined");
  }
}
module.exports = LinkedList;
