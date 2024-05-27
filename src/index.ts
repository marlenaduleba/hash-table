import { Stack } from "./data-structures/Stack.js";
import { Queue } from "./data-structures/Queue.js";
import { BinaryTree, TreeNode } from "./data-structures/BinaryTree.js";
import { Graph } from "./data-structures/Graph.js";
import { LinkedList, ListNode } from "./data-structures/LinkedList.js";
import { MinMaxStack } from "./algorithms/MinMaxStack.js";
import { isValidBST } from "./algorithms/BinarySearchTreeCheck.js";
import { bfsShortestPath, dijkstra } from "./algorithms/GraphAlgorithms.js";
import { hasCycle } from "./algorithms/LinkedListCycleDetection.js";

/**
 * Demonstrates various data structures and algorithms, showcasing how they can solve practical problems.
 */
function demonstrate() {
  console.log("--- Stack ---");
  // Stack can be used for reversing strings, for example, reversing mathematical expressions.
  const expression = "((5+3)*2)";
  const stack = new Stack<string>();
  for (const char of expression) {
    if (char === "(") {
      stack.push(char);
    } else if (char === ")") {
      stack.pop();
    }
  }
  console.log(stack)
  console.log("Is the expression balanced:", stack.isEmpty()); // Expected result: true

  console.log("--- Queue ---");
  // Queue can be used in a customer service system, where customers are served on a first-come, first-served basis.
  const customerQueue = new Queue<string>();
  customerQueue.enqueue("John");
  customerQueue.enqueue("Alice");
  customerQueue.enqueue("Bob");
  console.log("Next customer to be served:", customerQueue.dequeue()); // Expected result: "John"

  console.log("--- Binary Tree ---");
  // Binary tree can be used to implement directory structure in a file system.
  const fileSystem = new BinaryTree<string>();
  fileSystem.insert("/home");
  fileSystem.insert("/home/user1");
  fileSystem.insert("/home/user2");
  fileSystem.insert("/home/user1/documents");
  console.log("File system structure:");
  fileSystem.inOrderTraverse((path) => console.log(path));

  console.log("--- Graph ---");
  // Graphs can be used to represent social networks, where vertices are users and edges are relationships between them.
  const socialNetwork = new Graph();
  socialNetwork.addVertex("Alice");
  socialNetwork.addVertex("Bob");
  socialNetwork.addVertex("Carol");
  socialNetwork.addVertex("David");
  socialNetwork.addEdge("Alice", "Bob", 1);
  socialNetwork.addEdge("Alice", "Carol", 1);
  socialNetwork.addEdge("Bob", "David", 1);
  console.log("Friends of Alice:", socialNetwork.getAdjacencyList()["Alice"]); // Expected result: { Bob: 1, Carol: 1 }

  console.log("--- Linked List ---");
  // Linked list can be used to implement browsing history in a web browser.
  const browsingHistory = new LinkedList<string>();
  browsingHistory.insert("https://example.com");
  browsingHistory.insert("https://example.com/page1");
  browsingHistory.insert("https://example.com/page2");
  console.log("Last visited page:", browsingHistory.getHead()!.value); // Expected result: "https://example.com"

  console.log("--- Min/Max Stack ---");
  // Min/Max Stack can be used to track stock price changes in the stock market, where we can easily get the current highest and lowest price.
  const stockPrices = new MinMaxStack();
  stockPrices.push(100);
  stockPrices.push(110);
  stockPrices.push(105);
  console.log("Current maximum stock price:", stockPrices.getMax()); // Expected result: 110
  console.log("Current minimum stock price:", stockPrices.getMin()); // Expected result: 100

  console.log("--- Binary Search Tree Check ---");
  // Binary search tree can be used to search and organize data efficiently.
  // Example usage: Checking the validity of a product database to ensure no duplicate product IDs.
  const products: TreeNode<number>[] = [];
  // Sample product IDs
  const productIDs = [1001, 2003, 1502, 2505];
  // Adding products to the database
  productIDs.forEach((id) => products.push(new TreeNode(id)));

  // Checking the validity of the product database
  const isDatabaseValid = isValidBST(products[0]);
  if (isDatabaseValid) {
    console.log("Database is valid. No duplicate product IDs found.");
  } else {
    console.log("Database is invalid. Duplicate product IDs found.");
  }
  // Adding vertices and edges to the graph
  socialNetwork.addVertex("Alice");
  socialNetwork.addVertex("Bob");
  socialNetwork.addVertex("Carol");
  socialNetwork.addVertex("David");
  socialNetwork.addVertex("Eve");
  socialNetwork.addEdge("Alice", "Bob", 1);
  socialNetwork.addEdge("Alice", "Carol", 1);
  socialNetwork.addEdge("Bob", "David", 1);
  socialNetwork.addEdge("Carol", "Eve", 1);

  console.log("--- Dijkstra's Algorithm ---");
  // Using Dijkstra's algorithm to find the shortest path in a directed graph.
  console.log(
    "Shortest path from Alice to David:",
    dijkstra(socialNetwork.getAdjacencyList(), "Alice", "David")
  ); // Expected result: [ 'Alice', 'Bob', 'David' ]

  console.log("--- BFS Shortest Path ---");
  // Using BFS algorithm to find the shortest path in an undirected graph.
  console.log(
    "Shortest path from Alice to Eve:",
    bfsShortestPath(socialNetwork.getAdjacencyList(), "Alice", "Eve")
  ); // Expected result: [ 'Alice', 'Carol', 'Eve' ]

  console.log("--- Linked List Cycle Detection ---");
  // Checking if a linked list contains a cycle.
  const cycleList = new LinkedList<number>();
  cycleList.insert(1);
  cycleList.insert(2);
  cycleList.getHead()!.next!.next = cycleList.getHead(); // create a cycle
  console.log(
    "Does the linked list contain a cycle?",
    hasCycle(cycleList.getHead())
  ); // Expected result: true
}

// Running the demonstrate function
demonstrate();
