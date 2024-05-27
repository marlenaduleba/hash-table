import { TreeNode } from "../data-structures/BinaryTree.js";

/**
 * Checks if a binary tree is a valid binary search tree (BST).
 *
 * A BST is a tree where every node follows the rule:
 * - The left subtree of a node contains only nodes with keys less than the node's key.
 * - The right subtree of a node contains only nodes with keys greater than the node's key.
 * - Both the left and right subtrees must also be binary search trees.
 *
 * This function uses Morris Traversal, which is a space-efficient in-order traversal approach
 * that uses no additional space for recursion or a stack.
 *
 * @param root The root of the binary tree.
 * @returns true if the binary tree is a valid BST, false otherwise.
 */
export function isValidBST(root: TreeNode<number> | null): boolean {
  let curr: TreeNode<number> | null = root;
  let prev: TreeNode<number> | null = null;

  while (curr !== null) {
    if (curr.left === null) {
      // Process the current node
      if (prev !== null && prev.value >= curr.value) {
        return false;
      }
      prev = curr;
      curr = curr.right;
    } else {
      // Find the inorder predecessor
      let pred = curr.left;
      while (pred.right !== null && pred.right !== curr) {
        pred = pred.right;
      }

      if (pred.right === null) {
        // Make a threaded link
        pred.right = curr;
        curr = curr.left;
      } else {
        // Remove threaded link
        pred.right = null;
        // Process the current node
        if (prev !== null && prev.value >= curr.value) {
          return false;
        }
        prev = curr;
        curr = curr.right;
      }
    }
  }

  return true; // The binary tree is a valid BST
}
