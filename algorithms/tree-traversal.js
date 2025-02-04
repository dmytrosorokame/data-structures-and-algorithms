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

  minValueNode(currentNode) {
    while (currentNode.left) {
      currentNode = currentNode.left;
    }

    return currentNode;
  }

  BFS() {
    const queue = [];
    const results = [];

    let node = this.root;

    queue.push(node);

    while (queue.length) {
      const shiftedNode = queue.shift();

      results.push(shiftedNode.value);

      if (shiftedNode.left) queue.push(shiftedNode.left);
      if (shiftedNode.right) queue.push(shiftedNode.right);
    }

    return results;
  }
}

const BST = new BinarySearchTree();

console.log(JSON.stringify(BST));

BST.insert(47);
BST.insert(21);
BST.insert(76);
BST.insert(18);
BST.insert(52);
BST.insert(82);
BST.insert(27);

console.log(JSON.stringify(BST));

console.log(BST.BFS());
