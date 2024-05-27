import { Graph } from './../../src/data-structures/Graph';

/**
 * Test suite for the Graph class.
 */
describe("Graph", () => {
  let graph: Graph;

  beforeEach(() => {
    graph = new Graph();
  });

  /**
   * Test case for adding a vertex to the graph.
   */
  it("should add a vertex to the graph", () => {
    graph.addVertex("A");
    expect(graph.getAdjacencyList()["A"]).toBeDefined();
    expect(Object.keys(graph.getAdjacencyList()).length).toBe(1);
  });

  /**
   * Test case for adding an edge between two vertices in the graph.
   */
  it("should add an edge between two vertices", () => {
    graph.addVertex("A");
    graph.addVertex("B");
    graph.addEdge("A", "B", 5);
    expect(graph.getAdjacencyList()["A"]["B"]).toBe(5);
    expect(graph.getAdjacencyList()["B"]["A"]).toBe(5);
  });

  /**
   * Test case for performing a depth-first search (DFS) starting from a given vertex.
   */
  it("should perform a depth-first search (DFS)", () => {
    graph.addVertex("A");
    graph.addVertex("B");
    graph.addVertex("C");
    graph.addVertex("D");
    graph.addEdge("A", "B", 1);
    graph.addEdge("B", "C", 1);
    graph.addEdge("C", "D", 1);
    expect(graph.DFS("A")).toEqual(["A", "B", "C", "D"]);
  });

  /**
   * Test case for performing a breadth-first search (BFS) starting from a given vertex.
   */
  it("should perform a breadth-first search (BFS)", () => {
    graph.addVertex("A");
    graph.addVertex("B");
    graph.addVertex("C");
    graph.addVertex("D");
    graph.addEdge("A", "B", 1);
    graph.addEdge("B", "C", 1);
    graph.addEdge("C", "D", 1);
    expect(graph.BFS("A")).toEqual(["A", "B", "C", "D"]);
  });
});
