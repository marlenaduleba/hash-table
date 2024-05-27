import { MinMaxStack } from "./../../src/algorithms/MinMaxStack";

/**
 * Test suite for the MinMaxStack class.
 */
describe("MinMaxStack", () => {
  let minMaxStack: MinMaxStack;

  beforeEach(() => {
    minMaxStack = new MinMaxStack();
  });

  // Tests the behavior of pushing elements onto the stack and maintaining min/max values.
  it("should push elements onto the stack and maintain min/max values", () => {
    // Pushes several elements onto the stack.
    minMaxStack.push(3);
    minMaxStack.push(5);
    minMaxStack.push(2);
    minMaxStack.push(1);
    minMaxStack.push(7);

    // Checks if the maximum and minimum values are correctly updated after pushing elements.
    expect(minMaxStack.getMax()).toBe(7);
    expect(minMaxStack.getMin()).toBe(1);
  });

  // Tests the behavior of popping elements from the stack and updating min/max values accordingly.
  it("should pop elements from the stack and update min/max values accordingly", () => {
    // Pushes several elements onto the stack.
    minMaxStack.push(3);
    minMaxStack.push(5);
    minMaxStack.push(2);
    minMaxStack.push(1);
    minMaxStack.push(7);

    // Pops several elements from the stack.
    minMaxStack.pop();
    minMaxStack.pop();
    minMaxStack.pop();

    // Checks if the maximum and minimum values are correctly updated after popping elements.
    expect(minMaxStack.getMax()).toBe(5);
    expect(minMaxStack.getMin()).toBe(3);
  });

  // Tests the behavior when popping from an empty stack, expecting undefined.
  it("should return undefined when popping from an empty stack", () => {
    // Checks if undefined is returned when attempting to pop from an empty stack.
    expect(minMaxStack.pop()).toBeUndefined();
  });
});
