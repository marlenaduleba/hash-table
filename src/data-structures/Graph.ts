/**
 * Class representing a graph with weighted edges.
 */
export class Graph {
  private adjacencyList: { [key: string]: { [neighbor: string]: number } } = {};

  /**
   * Adds a vertex to the graph.
   * 
   * @param {string} vertex - The name of the vertex to add.
   */
  addVertex(vertex: string): void {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = {};
    }
  }

  /**
   * Adds an edge between two vertices in the graph.
   * 
  //  * @param {string} vertex1 - The first vertex.
   * @param {string} vertex2 - The second vertex.
   * @param {number} weight - The weight of the edge.
   */
  addEdge(vertex1: string, vertex2: string, weight: number): void {
    if (!this.adjacencyList[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.adjacencyList[vertex2]) {
      this.addVertex(vertex2);
    }
    this.adjacencyList[vertex1][vertex2] = weight;
    this.adjacencyList[vertex2][vertex1] = weight;
  }

  /**
   * Performs a depth-first search (DFS) starting from a given vertex.
   * 
   * @param {string} start - The starting vertex.
   * @returns {string[]} - The vertices visited during the DFS, in the order they were visited.
   */
  DFS(start: string): string[] {
    const stack = [start];
    const result: string[] = [];
    const visited: { [key: string]: boolean } = {};
    visited[start] = true;

    while (stack.length) {
      const vertex = stack.pop() as string;
      result.push(vertex);

      Object.keys(this.adjacencyList[vertex]).forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }

    return result;
  }

  /**
   * Performs a breadth-first search (BFS) starting from a given vertex.
   * 
   * @param {string} start - The starting vertex.
   * @returns {string[]} - The vertices visited during the BFS, in the order they were visited.
   */
  BFS(start: string): string[] {
    const queue = [start];
    const result: string[] = [];
    const visited: { [key: string]: boolean } = {};
    visited[start] = true;

    while (queue.length) {
      const vertex = queue.shift() as string;
      result.push(vertex);

      Object.keys(this.adjacencyList[vertex]).forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }

    return result;
  }

  /**
   * Returns the adjacency list representation of the graph.
   * 
   * @returns {Object} - The adjacency list representation of the graph.
   */
  getAdjacencyList(): { [key: string]: { [neighbor: string]: number } } {
    return this.adjacencyList;
  }
}
