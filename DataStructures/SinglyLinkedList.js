class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.tail = null;
    this.head = null;
    this.length = 0;
  }

  push(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) return undefined;

    const temp = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return temp;
  }

  unshift(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let currentNode = this.head;
    let currIndex = 0;
    while (currIndex !== index) {
      currentNode = currentNode.next;
      currIndex++;
    }
    return currentNode;
  }

  set(index, value) {
    const foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) {
      return !!this.push(value);
    }
    if (index === 0) {
      return !!this.unshift(value);
    }
    const newNode = new Node(value);
    const previous = this.get(index - 1);
    let temp = previous.next;
    previous.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    const previousNode = this.get(index - 1);
    const removed = previousNode.next;
    previousNode.next = removed.next;
    this.length--;
    return removed;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let prev = null;
    let next = null;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    return this;
  }

  print() {
    let node = this.head;
    while (node) {
      console.log(node.val);
      node = node.next;
    }
  }
}
///1 2 3 4
// N A

// const first = new Node("Hi");
// first.next = new Node("there");
// first.next.next = new Node("how");
// first.next.next.next = new Node("are");

const list = new SinglyLinkedList();
// list.push("Hi");
// list.push("there");
// list.push("Yordan");
list.push(1);
list.push(2);
list.push(3);
list.push(4);
