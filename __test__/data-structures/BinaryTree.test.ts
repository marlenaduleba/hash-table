import { BinaryTree } from "./../../src/data-structures/BinaryTree";

/**
 * Test suite for the BinaryTree class.
 */
describe("BinaryTree", () => {
  let tree: BinaryTree<number>;

  beforeEach(() => {
    tree = new BinaryTree<number>();
  });

  // Test for inserting a single node
  test("should insert a single node", () => {
    tree.insert(10);
    expect(tree.root?.value).toBe(10);
  });

  // Test for inserting multiple nodes
  test("should insert multiple nodes correctly", () => {
    tree.insert(10);
    tree.insert(5);
    tree.insert(15);

    expect(tree.root?.value).toBe(10);
    expect(tree.root?.left?.value).toBe(5);
    expect(tree.root?.right?.value).toBe(15);
  });

  // Test for searching an existing node
  test("should find a node if it exists", () => {
    tree.insert(10);
    tree.insert(5);
    tree.insert(15);

    const node = tree.search(5);
    expect(node?.value).toBe(5);
  });

  // Test for searching a non-existing node
  test("should return null if a node does not exist", () => {
    tree.insert(10);
    tree.insert(5);
    tree.insert(15);

    const node = tree.search(20);
    expect(node).toBeNull();
  });

  // Test for in-order traversal
  test("should traverse in in-order", () => {
    const values: number[] = [];
    tree.insert(10);
    tree.insert(5);
    tree.insert(15);

    tree.inOrderTraverse((value) => values.push(value));
    expect(values).toEqual([5, 10, 15]);
  });

  // Test for pre-order traversal
  test("should traverse in pre-order", () => {
    const values: number[] = [];
    tree.insert(10);
    tree.insert(5);
    tree.insert(15);

    tree.preOrderTraverse((value) => values.push(value));
    expect(values).toEqual([10, 5, 15]);
  });

  // Test for post-order traversal
  test("should traverse in post-order", () => {
    const values: number[] = [];
    tree.insert(10);
    tree.insert(5);
    tree.insert(15);

    tree.postOrderTraverse((value) => values.push(value));
    expect(values).toEqual([5, 15, 10]);
  });
});
