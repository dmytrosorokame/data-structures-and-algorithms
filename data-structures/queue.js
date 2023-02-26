class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(value) {
    const newNode = new Node(value);
    this.first = newNode;
    this.last = newNode;
    this.length = 1;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (this.length) {
      this.last.next = newNode;
    } else {
      this.first = newNode;
    }

    this.last = newNode;
    this.length++;

    return this;
  }
}
