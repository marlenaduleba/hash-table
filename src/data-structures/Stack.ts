/**
 * Class representing a stack data structure.
 * A stack follows the Last In First Out (LIFO) principle.
 */
export class Stack<T> {
  private items: T[] = [];

  /**
   * Adds an element to the top of the stack.
   * @param {T} element - The element to be added to the stack.
   */
  push(element: T) {
    this.items.push(element);
  }

  /**
   * Removes and returns the top element of the stack.
   * @returns {T | null} The top element of the stack, or null if the stack is empty.
   */
  pop(): T | null {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.pop() as T;
  }

  /**
   * Returns the top element of the stack without removing it.
   * @returns {T | null} The top element of the stack, or null if the stack is empty.
   */
  peek(): T | null {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[this.items.length - 1];
  }

  /**
   * Checks if the stack is empty.
   * @returns {boolean} True if the stack is empty, false otherwise.
   */
  isEmpty(): boolean {
    return this.items.length === 0;
  }
}
