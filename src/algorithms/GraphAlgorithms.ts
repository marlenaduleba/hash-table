/**
 * Finds the shortest path between two vertices in a graph using Breadth-First Search (BFS).
 * 
 * @param {Object} graph - The graph represented as an adjacency list.
 * @param {string} start - The starting vertex.
 * @param {string} end - The ending vertex.
 * @returns {string[]} - The shortest path between the start and end vertices.
 */
export function bfsShortestPath(graph: { [key: string]: { [neighbor: string]: number } }, start: string, end: string): string[] {
    // Initialize a queue with the starting vertex and its path.
    const queue: [string, string[]][] = [[start, [start]]];
    const visited = new Set<string>(); // Keeps track of visited vertices.
  
    // Continue BFS until the queue is empty.
    while (queue.length > 0) {
      // Dequeue a vertex and its path.
      const [vertex, path] = queue.shift()!;
      
      // If the dequeued vertex is the end vertex, return its path.
      if (vertex === end) {
        return path;
      }
  
      // Mark the current vertex as visited.
      visited.add(vertex);
  
      // Explore all neighbors of the current vertex.
      const neighbors = graph[vertex];
      for (const neighbor in neighbors) {
        // If the neighbor has not been visited yet, add it to the queue with the updated path.
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push([neighbor, [...path, neighbor]]);
        }
      }
    }
  
    // If no path is found, return an empty array.
    return [];
}


/**
 * Finds the shortest path between two vertices in a graph using Dijkstra's algorithm.
 * 
 * @param {Object} graph - The graph represented as an adjacency list.
 * @param {string} start - The starting vertex.
 * @param {string} end - The ending vertex.
 * @returns {string[]} - The shortest path between the start and end vertices, or an empty array if no path exists.
 */
export function dijkstra(graph: { [key: string]: { [neighbor: string]: number } }, start: string, end: string): string[] {
    const distances: { [key: string]: number } = {}; // Stores the shortest distances from the start vertex to each vertex.
    const previous: { [key: string]: string | null } = {}; // Stores the previous vertex in the shortest path.
    const queue = new Set<string>(); // Stores the vertices to be visited.
  
    // Initialize distances to each vertex as Infinity and previous vertices as null.
    for (const vertex in graph) {
      distances[vertex] = Infinity;
      previous[vertex] = null;
      queue.add(vertex);
    }
  
    distances[start] = 0; // Distance from start vertex to itself is 0.
  
    // Main loop to find the shortest path.
    while (queue.size > 0) {
      // Find the vertex with the smallest distance that has not been visited yet.
      const currentVertex = Array.from(queue).reduce((minVertex, vertex) =>
        distances[vertex] < distances[minVertex] ? vertex : minVertex
      );
  
      queue.delete(currentVertex);
  
      // Check if we have found the path to the end vertex.
      if (currentVertex === end) {
        // If the distance to the end vertex is still Infinity, it means there is no path.
        if (distances[currentVertex] === Infinity) {
          return []; // Return an empty array since there is no path.
        }
  
        // Build the path by traversing previous vertices from the end vertex to the start vertex.
        const path: string[] = [];
        let step: string | null = end;
        while (step !== null) {
          path.unshift(step);
          step = previous[step];
        }
        return path;
      }
  
      // For each neighbor of the current vertex, update their distances and previous vertices if a shorter path is found.
      const neighbors = graph[currentVertex];
      for (const neighbor in neighbors) {
        const alt = distances[currentVertex] + neighbors[neighbor];
        if (alt < distances[neighbor]) {
          distances[neighbor] = alt;
          previous[neighbor] = currentVertex;
        }
      }
    }
  
    // If we reach this point, it means there is no path from the start to the end vertex.
    return [];
  }
  
  
  
  