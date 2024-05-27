import { LinkedList } from "../../src/data-structures/LinkedList";
import { hasCycle } from "../../src/algorithms/LinkedListCycleDetection";

/**
 * Tests for the hasCycle function.
 */
describe("hasCycle", () => {
  /**
   * Tests whether the function returns false for an empty list.
   */
  it("should return false for an empty list", () => {
    const list = new LinkedList<number>();
    expect(hasCycle(list.getHead())).toBe(false);
  });

  /**
   * Tests whether the function returns false for a list without a cycle.
   */
  it("should return false for a list without a cycle", () => {
    const list = new LinkedList<number>();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    expect(hasCycle(list.getHead())).toBe(false);
  });

  /**
   * Tests whether the function returns true for a list with a cycle.
   */
  it("should return true for a list with a cycle", () => {
    const list = new LinkedList<number>();
    list.insert(1);
    const head = list.getHead();
    // Sets up a loop in the list
    if (head !== null) {
      head.next = head;
    }
    expect(hasCycle(list.getHead())).toBe(true);
  });
});
