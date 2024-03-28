class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.vertex[vertex]) {
      this.vertex[vertex] = [];
      return true;
    }

    return false;
  }
}
