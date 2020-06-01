// Linked List
class Node {
  constructor({ value, next, prev }) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class LinkedList {
  constructor() {
    this.beginning = null;
    this.end = null;
    this.current = null;
  }

  addNode(value, next, prev) {
    const node = new Node({ value, next, prev });
    if (this.beginning === null) {
      this.beginning = node;
      this.end = node;
    } else {
      node.prev = this.end;
      this.end.next = node;
      this.end = node;
    }
  }

  findNode(value) {
    this.current = this.beginning;
    console.log("this.current", this.current);
    while (this.current.value !== value && this.current.next) {
      this.current = this.current.next;
    }
    if (this.current.value === value) {
      console.log("found the node");
      return this.current;
    } else {
      console.log("That value does not exist in this list.");
    }
  }

  deleteNode(value) {
    const node = this.findNode(value);
    // middle
    if (node.prev && node.next) {
      node.prev.next = node.next;
      node.next.prev = node.prev;
      console.log("node deleted from the middle.");
    }
    //head
    else if (node === this.beginning && node !== this.end) {
      node.next.prev = null;
      this.beginning = node.next;
      console.log("node deleted from the beginning.");
    }
    //tail
    else if (node === this.end && node !== this.beginning) {
      node.prev.next = null;
      this.end = node.prev;
      console.log("node deleted from the end.");
    }
    //head & tail
    else {
      this.beginning = null;
      this.end = null;
      this.current = null;
      console.log("Node was the entire list.  Now it's all gone.");
    }
  }
}

const linkedList = new LinkedList();
console.log(linkedList);
linkedList.addNode(1, null, null);
linkedList.addNode(2, null, null);
linkedList.addNode(3, null, null);
linkedList.addNode(4, null, null);
console.log(linkedList);
linkedList.findNode(3);
linkedList.deleteNode(3);
console.log(linkedList);
linkedList.findNode(3);
