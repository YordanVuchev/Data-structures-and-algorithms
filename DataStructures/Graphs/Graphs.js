class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (x) => x !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (x) => x !== vertex1
    );
  }

  removeVertex(vertex) {
    for (const curr of this.adjacencyList[vertex]) {
      this.removeEdge(vertex, curr);
    }
    delete this.adjacencyList[vertex];
  }
}

const g = new Graph();
g.addVertex("Tokyo");
g.addVertex("Sofia");
g.addVertex("Varna");
g.addEdge("Sofia", "Varna");
