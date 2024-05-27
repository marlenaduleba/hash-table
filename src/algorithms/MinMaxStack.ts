/**
 * Represents a stack data structure that supports finding the minimum and maximum elements in constant time (O(1))
 * and constant space (O(1)).
 */
export class MinMaxStack {
  private stack: number[] = [];
  private maxEl: number | null = null;
  private minEl: number | null = null;

  /**
   * Pushes an element onto the stack.
   * @param x The element to push onto the stack.
   */
  push(x: number): void {
    // If the stack is empty, initialize it with the first element.
    if (this.stack.length === 0) {
      this.stack.push(x);
      this.maxEl = x;
      this.minEl = x;
      return;
    }

    // Push a transformed value onto the stack if the element is greater than the current maximum.
    if (x > this.maxEl!) {
      this.stack.push(2 * x - this.maxEl!);
      this.maxEl = x;
    }
    // Push a transformed value onto the stack if the element is less than the current minimum.
    else if (x < this.minEl!) {
      this.stack.push(2 * x - this.minEl!);
      this.minEl = x;
    }
    // Push the element directly onto the stack if it's neither the new maximum nor the new minimum.
    else {
      this.stack.push(x);
    }
  }

  /**
   * Removes and returns the top element from the stack.
   * @returns The popped element from the stack, or undefined if the stack is empty.
   */
  pop(): number | undefined {
    // If the stack is empty, return undefined.
    if (this.stack.length === 0) {
      return undefined;
    }

    const t = this.stack.pop();
    let result: number;

    // If the popped element is greater than the current maximum, recalculate the maximum.
    if (t! > this.maxEl!) {
      result = this.maxEl!;
      this.maxEl = 2 * this.maxEl! - t!;
    }
    // If the popped element is less than the current minimum, recalculate the minimum.
    else if (t! < this.minEl!) {
      result = this.minEl!;
      this.minEl = 2 * this.minEl! - t!;
    }
    // Otherwise, the popped element is neither the current maximum nor minimum.
    else {
      result = t!;
    }

    // Reset maxEl and minEl if the stack is empty after popping.
    if (this.stack.length === 0) {
      this.maxEl = null;
      this.minEl = null;
    }

    return result;
  }

  /**
   * Returns the maximum element in the stack.
   * @returns The maximum element in the stack, or null if the stack is empty.
   */
  getMax(): number | null {
    return this.maxEl;
  }

  /**
   * Returns the minimum element in the stack.
   * @returns The minimum element in the stack, or null if the stack is empty.
   */
  getMin(): number | null {
    return this.minEl;
  }
}
