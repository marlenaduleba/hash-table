import { LinkedList } from "../../src/data-structures/LinkedList";

/**
 * Test suite for the LinkedList class.
 */
describe("LinkedList", () => {
  let list: LinkedList<number>;

  beforeEach(() => {
    list = new LinkedList<number>();
  });

  // Checks if a newly created list is empty and has a size of 0
  test("should initialize as empty", () => {
    expect(list.isEmpty()).toBe(true);
    expect(list.size()).toBe(0);
  });

  // Adds elements to the end of the list and checks if they are added correctly
  test("should insert elements at the end of the list", () => {
    list.insert(1);
    list.insert(2);
    list.insert(3);

    expect(list.size()).toBe(3);

    const elements: number[] = [];
    list.traverse((value) => elements.push(value));
    expect(elements).toEqual([1, 2, 3]);
  });

  // Removes the first occurrence of the specified value from the list
  test("should delete the first occurrence of the specified value", () => {
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.insert(2);

    list.delete(2);

    const elements: number[] = [];
    list.traverse((value) => elements.push(value));
    expect(elements).toEqual([1, 3, 2]);

    expect(list.size()).toBe(3);
  });

  // Checks if the list remains unchanged when the value to delete is not found
  test("should not delete anything if the value is not found", () => {
    list.insert(1);
    list.insert(2);
    list.insert(3);

    list.delete(4);

    const elements: number[] = [];
    list.traverse((value) => elements.push(value));
    expect(elements).toEqual([1, 2, 3]);

    expect(list.size()).toBe(3);
  });

  // Removes the value at the head of the list
  test("should delete the head if the value is at the head", () => {
    list.insert(1);
    list.insert(2);
    list.insert(3);

    list.delete(1);

    const elements: number[] = [];
    list.traverse((value) => elements.push(value));
    expect(elements).toEqual([2, 3]);

    expect(list.size()).toBe(2);
  });

  // Searches for the node with the specified value and returns it
  test("should search and return the node with the specified value", () => {
    list.insert(1);
    list.insert(2);
    list.insert(3);

    const node = list.search(2);
    expect(node).not.toBeNull();
    expect(node!.value).toBe(2);
  });

  // Checks if the search method returns null when the value does not exist in the list
  test("should return null when searching for a non-existent value", () => {
    list.insert(1);
    list.insert(2);
    list.insert(3);

    const node = list.search(4);
    expect(node).toBeNull();
  });

  // Checks if the getHead method returns the head of the list
  test("should return the head of the list", () => {
    list.insert(1);
    list.insert(2);
    list.insert(3);

    const head = list.getHead();
    expect(head).not.toBeNull();
    expect(head!.value).toBe(1);
  });
});
