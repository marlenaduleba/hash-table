/**
 * Represents a node in a singly linked list.
 * @template T - The type of the value stored in the node.
 */
export class ListNode<T> {
  value: T;
  next: ListNode<T> | null = null;

  /**
   * Creates an instance of ListNode.
   * @param {T} value - The value to store in the node.
   */
  constructor(value: T) {
    this.value = value;
  }
}

/**
 * Represents a singly linked list.
 * @template T - The type of the values stored in the list.
 */
export class LinkedList<T> {
  private head: ListNode<T> | null = null;

  /**
   * Inserts a new node with the given value at the end of the list.
   * @param {T} value - The value to insert.
   */
  insert(value: T): void {
    const newNode = new ListNode(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  /**
   * Deletes the first node with the given value from the list.
   * @param {T} value - The value to delete.
   */
  delete(value: T): void {
    if (this.head === null) return;
    if (this.head.value === value) {
      this.head = this.head.next;
      return;
    }
    let current: ListNode<T> | null = this.head;
    let previous: ListNode<T> | null = null;
    while (current !== null && current.value !== value) {
      previous = current;
      current = current.next;
    }
    if (current === null) return;
    previous!.next = current.next;
  }

  /**
   * Searches for the first node with the given value.
   * @param {T} value - The value to search for.
   * @returns {ListNode<T> | null} - The node with the given value, or null if not found.
   */
  search(value: T): ListNode<T> | null {
    let current = this.head;
    while (current !== null) {
      if (current.value === value) {
        return current;
      }
      current = current.next;
    }
    return null;
  }

  /**
   * Traverses the list and applies a callback function to each node's value.
   * @param {(value: T) => void} callback - The function to apply to each node's value.
   */
  traverse(callback: (value: T) => void): void {
    let current = this.head;
    while (current !== null) {
      callback(current.value);
      current = current.next;
    }
  }

  /**
   * Checks if the list is empty.
   * @returns {boolean} - True if the list is empty, false otherwise.
   */
  isEmpty(): boolean {
    return this.head === null;
  }

  /**
   * Gets the size of the list.
   * @returns {number} - The number of nodes in the list.
   */
  size(): number {
    let count = 0;
    let current = this.head;
    while (current !== null) {
      count++;
      current = current.next;
    }
    return count;
  }

  /**
   * Gets the head node of the list.
   * @returns {ListNode<T> | null} - The head node of the list, or null if the list is empty.
   */
  getHead(): ListNode<T> | null {
    return this.head;
  }
}
