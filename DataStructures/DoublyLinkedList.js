class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    const poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }

  shift() {
    if (!this.head) return undefined;
    const shiftedNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = shiftedNode.next;
      this.head.prev = null;
      shiftedNode.next = null;
    }

    this.length--;
    return shiftedNode;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;

    if (index <= this.length / 2) {
      let counter = 0;
      let currNode = this.head;
      while (counter !== index) {
        currNode = currNode.next;
        counter++;
      }
      return currNode;
    } else {
      let counter = this.length - 1;
      let currNode = this.tail;
      while (counter !== index) {
        currNode = currNode.prev;
        counter--;
      }
      return currNode;
    }
  }

  set(index, value) {
    const foundNode = this.get(index);
    if (foundNode !== null) {
      foundNode.val = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) {
      return !!this.unshift(value);
    }
    if (index === this.length) {
      return !!this.push(value);
    }

    let newNode = new Node(value);
    let prevNode = this.get(index - 1);
    let afterNode = prevNode.next;

    prevNode.next = newNode;
    newNode.prev = prevNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;

    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) {
      return this.shift(index);
    }
    if (index === this.length - 1) {
      return this.pop(index);
    }

    let foundNode = this.get(index);
    let prevNode = foundNode.prev;
    let nextNode = foundNode.next;

    prevNode.next = nextNode;
    nextNode.prev = prevNode;

    foundNode.next = null;
    foundNode.prev = null;
    this.length--;
    return foundNode;
  }
}

const list = new DoublyLinkedList();
list.push(2);
list.push(4);
list.push(6);
