class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let currNode = this.root;
    while (true) {
      if (value === currNode.value) {
        return undefined;
      }
      if (value > currNode.value) {
        if (!currNode.right) {
          currNode.right = newNode;
          break;
        }
        currNode = currNode.right;
      } else {
        if (!currNode.left) {
          currNode.left = newNode;
          break;
        }
        currNode = currNode.left;
      }
    }
    return this;
  }

  find(value) {
    if (!this.root) return false;
    let currNode = this.root;
    while (true) {
      if (value === currNode.value) {
        return currNode;
      }
      if (value > currNode.value) {
        if (!currNode.right) {
          break;
        }
        currNode = currNode.right;
      } else {
        if (!currNode.left) {
          break;
        }
        currNode = currNode.left;
      }
    }

    return undefined;
  }
}

const tree = new BinarySearchTree();

tree.insert(3);
tree.insert(17);
tree.insert(19);
tree.insert(2);
