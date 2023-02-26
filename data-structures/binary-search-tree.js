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

    let temp = this.root;

    while (true) {
      if (newNode.value === temp.value) return;

      if (value > temp.value) {
        if (!temp.right) {
          temp.right = newNode;
          return this;
        }

        temp = temp.right;
      } else {
        if (!temp.left) {
          temp.left = newNode;
          return this;
        }

        temp = temp.left;
      }
    }
  }
}
