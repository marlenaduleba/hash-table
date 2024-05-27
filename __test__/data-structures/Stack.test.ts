import { Stack } from "./../../src/data-structures/Stack";

/**
 * Test suite for the Stack class.
 */
describe("Stack", () => {
  let stack: Stack<number>;

  beforeEach(() => {
    stack = new Stack<number>();
  });

  // Test if the stack initializes as empty
  test("should initialize as empty", () => {
    expect(stack.isEmpty()).toBe(true);
  });

  // Test adding elements onto the stack
  test("should push elements onto the stack", () => {
    stack.push(1);
    stack.push(2);
    expect(stack.isEmpty()).toBe(false);
    expect(stack.peek()).toBe(2);
  });

  // Test removing the top element from the stack
  test("should pop elements from the stack", () => {
    stack.push(1);
    stack.push(2);
    const popped = stack.pop();
    expect(popped).toBe(2);
    expect(stack.peek()).toBe(1);
  });

  // Test pop behavior when stack is empty
  test("should return null when popping from an empty stack", () => {
    const popped = stack.pop();
    expect(popped).toBeNull();
  });

  // Test peek behavior when stack is empty
  test("should return null when peeking into an empty stack", () => {
    const peeked = stack.peek();
    expect(peeked).toBeNull();
  });

  // Test peeking the top element without removing it
  test("should peek the top element without removing it", () => {
    stack.push(1);
    stack.push(2);
    const peeked = stack.peek();
    expect(peeked).toBe(2);
    expect(stack.peek()).toBe(2);
  });
});
