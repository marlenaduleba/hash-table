import { ListNode } from "../data-structures/LinkedList.js";

/**
 * Checks if a linked list has a cycle.
 *
 * This function implements Floyd's Cycle Detection Algorithm (also known as the Tortoise and Hare algorithm)
 * to efficiently detect if a linked list contains a cycle.
 *
 * @template T - The type of the values stored in the linked list nodes.
 *
 * @param {ListNode<T> | null} head - The head of the linked list to check.
 * @returns {boolean} - True if the linked list contains a cycle, false otherwise.
 */
export function hasCycle<T>(head: ListNode<T> | null): boolean {
  // If the head is null, the list is empty and therefore cannot contain a cycle
  if (head === null) {
    return false;
  }

  // Initialize two pointers, slow and fast, both pointing to the head of the list
  let slow: ListNode<T> | null = head;
  let fast: ListNode<T> | null = head;

  // Move the slow pointer by one step and the fast pointer by two steps
  // If there is a cycle, eventually the fast pointer will catch up to the slow pointer
  while (fast !== null && fast.next !== null) {
    slow = slow ? slow.next : null; // Use conditional operator to prevent accessing properties of null
    fast = fast.next.next;

    // If the slow pointer equals the fast pointer at any point, a cycle is detected
    if (slow === fast) {
      return true;
    }
  }

  // If the loop terminates without detecting a cycle, return false
  return false;
}
