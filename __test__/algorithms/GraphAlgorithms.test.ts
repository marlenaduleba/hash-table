import { bfsShortestPath, dijkstra } from './../../src/algorithms/GraphAlgorithms';

/**
 * Tests for the bfsShortestPath function.
 */
describe('bfsShortestPath', () => {
    /**
     * Tests whether the function finds the shortest path between two vertices using BFS.
     */
    it('should find the shortest path between two vertices using BFS', () => {
      const graph = {
        A: { B: 1, C: 1 },
        B: { A: 1, D: 1 },
        C: { A: 1, D: 1, E: 1 },
        D: { B: 1, C: 1, E: 1 },
        E: { C: 1, D: 1 }
      };
  
      expect(bfsShortestPath(graph, 'A', 'E')).toEqual(['A', 'C', 'E']);
    });
  
    /**
     * Tests whether the function returns an empty array if no path exists between the vertices.
     */
    it('should return an empty array if no path exists between the vertices', () => {
      const graph = {
        A: { B: 1 },
        B: { A: 1 },
        C: { D: 1 },
        D: { C: 1 }
      };
  
      expect(bfsShortestPath(graph, 'A', 'C')).toEqual([]);
    });
  });
  
  /**
   * Tests for the dijkstra function.
   */
  describe('dijkstra', () => {
    /**
     * Tests whether the function finds the shortest path between two vertices using Dijkstra's algorithm.
     */
    it('should find the shortest path between two vertices using Dijkstra\'s algorithm', () => {
      const graph = {
        A: { B: 1, C: 4 },
        B: { A: 1, D: 2 },
        C: { A: 4, D: 3, E: 2 },
        D: { B: 2, C: 3, E: 1 },
        E: { C: 2, D: 1 }
      };
  
      expect(dijkstra(graph, 'A', 'E')).toEqual(['A', 'B', 'D', 'E']);
    });
  
    /**
     * Tests whether the function returns an empty array if no path exists between the vertices.
     */
    it('should return an empty array if no path exists between the vertices', () => {
      const graph = {
        A: { B: 1 },
        B: { A: 1 },
        C: { D: 1 },
        D: { C: 1 }
      };
  
      expect(dijkstra(graph, 'A', 'C')).toEqual([]);
    });
  });
  