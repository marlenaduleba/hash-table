/**
 * Class representing a generic queue data structure.
 *
 * Queue operates on a First-In-First-Out (FIFO) principle where the first element added to the queue
 * is the first one to be removed. This implementation uses an array to store elements.
 *
 * @template T The type of elements held in the queue.
 */
export class Queue<T> {
  private items: T[] = [];

  /**
   * Adds an element to the back of the queue.
   *
   * @param element The element to be added to the queue.
   */
  enqueue(element: T) {
    this.items.push(element);
  }

  /**
   * Removes and returns the element at the front of the queue.
   * If the queue is empty, returns null.
   *
   * @returns The element at the front of the queue or null if the queue is empty.
   */
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.shift() as T;
  }

  /**
   * Returns the element at the front of the queue without removing it.
   * If the queue is empty, returns null.
   *
   * @returns The element at the front of the queue or null if the queue is empty.
   */
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[0];
  }

  /**
   * Checks if the queue is empty.
   *
   * @returns `true` if the queue is empty, otherwise `false`.
   */
  isEmpty() {
    return this.items.length === 0;
  }
}
