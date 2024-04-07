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

      if (newNode.value > temp.value) {
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

  contains(value) {
    if (!this.root) return false;

    let temp = this.root;

    while (temp) {
      if (value > temp.value) {
        temp = temp.right;
      } else if (value < temp.value) {
        temp = temp.left;
      } else {
        return true;
      }
    }

    return false;
  }

  rContains(value, currentNode = this.root) {
    if (currentNode === null) return false;

    if (value === currentNode.value) return true;

    if (value < currentNode.value) {
      return this.rContains(value, currentNode.left);
    } else {
      return this.rContains(value, currentNode.right);
    }
  }

  #rInsert(value, currentNode = this.root) {
    if (currentNode === null) return new Node(value);

    if (value < currentNode.value) {
      currentNode.left = this.#rInsert(value, currentNode.left);
    } else if (value > currentNode.value) {
      currentNode.right = this.#rInsert(value, currentNode.right);
    }

    return currentNode;
  }

  rInsert(value) {
    if (this.root === null) this.root = new Node(value);
    this.#rInsert(value);
  }

  minValueNode(currentNode) {
    while (currentNode.left) {
      currentNode = currentNode.left;
    }

    return currentNode;
  }
}

const newTree = new BinarySearchTree();

newTree.rInsert(2);
newTree.rInsert(1);
newTree.rInsert(3);

console.log(newTree.root);

console.log(newTree.rContains(3));
console.log(newTree.rContains(5));
