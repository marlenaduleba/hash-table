import { BinaryTree } from "./../../src/data-structures/BinaryTree";
import { isValidBST } from "./../../src/algorithms/BinarySearchTreeCheck";

/**
 * Test suite for the isValidBST function.
 */
describe("isValidBST using BinaryTree class", () => {
  // Test to verify an empty tree is considered a valid BST
  it("should return true for an empty BinaryTree", () => {
    const tree = new BinaryTree<number>();
    expect(isValidBST(tree.root)).toBe(true);
  });

  // Test to verify a single node tree is a valid BST
  it("should return true for a BinaryTree with one node", () => {
    const tree = new BinaryTree<number>();
    tree.insert(1);
    expect(isValidBST(tree.root)).toBe(true);
  });

  // Test to verify a valid BST with multiple nodes
  it("should return true for a valid populated BST", () => {
    const tree = new BinaryTree<number>();
    tree.insert(10);
    tree.insert(5);
    tree.insert(15);
    tree.insert(1);
    tree.insert(6);
    tree.insert(13);
    tree.insert(20);
    expect(isValidBST(tree.root)).toBe(true);
  });

  // Test to ensure the function correctly identifies a non-BST
  it("should return false for a BinaryTree that is not a BST", () => {
    const tree = new BinaryTree<number>();
    // Manually creating nodes to break BST rules
    tree.root = {
      value: 10,
      left: { value: 5, left: null, right: null },
      right: { value: 8, left: null, right: null },
    }; // right node value 8 should be > 10
    expect(isValidBST(tree.root)).toBe(false);
  });
});
