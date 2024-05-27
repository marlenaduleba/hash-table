import { Queue } from "./../../src/data-structures/Queue";

/**
 * Test suite for the Queue class.
 */
describe("Queue", () => {
  let queue: Queue<number>;

  beforeEach(() => {
    queue = new Queue<number>();
  });

  // Test initialization state of the queue
  test("should initialize as empty", () => {
    expect(queue.isEmpty()).toBe(true);
  });

  // Test adding elements to the queue
  test("should enqueue elements to the queue", () => {
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.isEmpty()).toBe(false);
  });

  // Test removing the first element from the queue
  test("should dequeue the first element", () => {
    queue.enqueue(1);
    queue.enqueue(2);
    const dequeued = queue.dequeue();
    expect(dequeued).toBe(1);
    expect(queue.peek()).toBe(2);
  });

  // Test dequeue behavior on an empty queue
  test("should return null when dequeueing from an empty queue", () => {
    const dequeued = queue.dequeue();
    expect(dequeued).toBeNull();
  });

  // Test peeking at the first element without removing
  test("should peek the first element without removing it", () => {
    queue.enqueue(1);
    queue.enqueue(2);
    const peeked = queue.peek();
    expect(peeked).toBe(1);
    expect(queue.peek()).toBe(1);
  });

  // Test peek behavior on an empty queue
  test("should return null when peeking into an empty queue", () => {
    const peeked = queue.peek();
    expect(peeked).toBeNull();
  });
});
