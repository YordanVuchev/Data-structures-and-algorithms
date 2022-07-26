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

  bfs() {
    const data = [];
    const queue = [];
    let node = this.root;
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return data;
  }

  DFSPreOrder() {
    const data = [];
    let curr = this.root;

    function traverse(node) {
      data.push(node);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(curr);
    return data;
  }

  DFSPostOrder() {
    const data = [];
    let curr = this.root;

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node);
    }

    traverse(curr);
    return data;
  }

  DFSInOrder() {
    const data = [];
    let curr = this.root;

    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node);
      if (node.right) traverse(node.right);
    }

    traverse(curr);
    return data;
  }
}

const tree = new BinarySearchTree();

tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
