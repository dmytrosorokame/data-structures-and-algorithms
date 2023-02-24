class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);

    if (this.length) {
      this.tail.next = newNode;
    } else {
      this.head = newNode;
    }

    this.tail = newNode;
    this.length++;

    return this;
  }

  pop() {
    if (!this.length) return;

    let temp = this.head;
    let pre = this.head;

    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }

    this.tail = pre;
    this.tail.next = null;

    this.length--;

    if (!this.length) {
      this.head = null;
      this.tail = null;
    }

    return temp;
  }

  unshift(value) {
    const newNode = new Node(value);

    if (this.length) {
      newNode.next = this.head;
    } else {
      this.tail = newNode;
    }

    this.head = newNode;
    this.length++;

    return this;
  }

  shift() {
    if (!this.length) return;

    const temp = this.head;
    this.head = this.head.next;
    temp.next = null;

    this.length--;

    if (!this.length) {
      this.tail = null;
    }

    return temp;
  }

  get(index) {
    if (index < 0 || index >= this.length) return;

    let temp = this.head;

    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }

    return temp;
  }

  insert(index, value) {}
}
