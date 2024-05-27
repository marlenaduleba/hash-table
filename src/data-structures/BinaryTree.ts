/**
 * Represents a node in a binary tree.
 *
 * @template T The type of value stored in the node.
 */
export class TreeNode<T> {
  value: T;
  left: TreeNode<T> | null = null;
  right: TreeNode<T> | null = null;

  /**
   * Creates a new TreeNode.
   *
   * @param value The value to be stored in the node.
   */
  constructor(value: T) {
    this.value = value;
  }
}

/**
 * Represents a binary tree data structure.
 *
 * @template T The type of values stored in the tree.
 */
export class BinaryTree<T> {
  root: TreeNode<T> | null = null;

  /**
   * Inserts a value into the binary tree.
   *
   * @param value The value to be inserted.
   */
  insert(value: T): void {
    const newNode = new TreeNode(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  /**
   * Helper method to insert a new node into the tree.
   *
   * @param node The current node in the tree.
   * @param newNode The new node to be inserted.
   * @private
   */
  private insertNode(node: TreeNode<T>, newNode: TreeNode<T>): void {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  /**
   * Searches for a value in the binary tree.
   *
   * @param value The value to search for.
   * @returns The node containing the value, or null if not found.
   */
  search(value: T): TreeNode<T> | null {
    return this.searchNode(this.root, value);
  }

  /**
   * Helper method to search for a node in the tree.
   *
   * @param node The current node in the tree.
   * @param value The value to search for.
   * @returns The node containing the value, or null if not found.
   * @private
   */
  private searchNode(node: TreeNode<T> | null, value: T): TreeNode<T> | null {
    if (node === null) {
      return null;
    }
    if (value < node.value) {
      return this.searchNode(node.left, value);
    } else if (value > node.value) {
      return this.searchNode(node.right, value);
    } else {
      return node;
    }
  }

  /**
   * Performs an in-order traversal of the tree, executing a callback on each node's value.
   *
   * @param callback The callback function to execute on each node's value.
   */
  inOrderTraverse(callback: (value: T) => void): void {
    this.inOrderTraverseNode(this.root, callback);
  }

  /**
   * Helper method for in-order traversal.
   *
   * @param node The current node in the tree.
   * @param callback The callback function to execute on each node's value.
   * @private
   */
  private inOrderTraverseNode(
    node: TreeNode<T> | null,
    callback: (value: T) => void
  ): void {
    if (node !== null) {
      this.inOrderTraverseNode(node.left, callback);
      callback(node.value);
      this.inOrderTraverseNode(node.right, callback);
    }
  }

  /**
   * Performs a pre-order traversal of the tree, executing a callback on each node's value.
   *
   * @param callback The callback function to execute on each node's value.
   */
  preOrderTraverse(callback: (value: T) => void): void {
    this.preOrderTraverseNode(this.root, callback);
  }

  /**
   * Helper method for pre-order traversal.
   *
   * @param node The current node in the tree.
   * @param callback The callback function to execute on each node's value.
   * @private
   */
  private preOrderTraverseNode(
    node: TreeNode<T> | null,
    callback: (value: T) => void
  ): void {
    if (node !== null) {
      callback(node.value);
      this.preOrderTraverseNode(node.left, callback);
      this.preOrderTraverseNode(node.right, callback);
    }
  }

  /**
   * Performs a post-order traversal of the tree, executing a callback on each node's value.
   *
   * @param callback The callback function to execute on each node's value.
   */
  postOrderTraverse(callback: (value: T) => void): void {
    this.postOrderTraverseNode(this.root, callback);
  }

  /**
   * Helper method for post-order traversal.
   *
   * @param node The current node in the tree.
   * @param callback The callback function to execute on each node's value.
   * @private
   */
  private postOrderTraverseNode(
    node: TreeNode<T> | null,
    callback: (value: T) => void
  ): void {
    if (node !== null) {
      this.postOrderTraverseNode(node.left, callback);
      this.postOrderTraverseNode(node.right, callback);
      callback(node.value);
    }
  }
}
