/**
 * Class representing a custom hash table with linear probing.
 */
import HashNode from "./HashNode.js";

class CustomHashTable {
  private capacity: number;
  private size: number;
  private arr: Array<HashNode | null>;
  private dummy: HashNode;

  /**
   * Constructor to initialize the hash table.
   * Sets the default capacity to 20 and initializes the table with null values.
   */
  constructor() {
    this.capacity = 20;
    this.size = 0;
    this.arr = new Array(this.capacity).fill(null);
    this.dummy = new HashNode('', -1);
  }

  /**
   * Generates a hash code for the given key.
   * @param key - The key to be hashed.
   * @returns A hash code (integer) for the key.
   */
  hash(key: string): number {
    let hashVal = 0;
    for (let i = 0; i < key.length; i++) {
      hashVal = (hashVal * 31 + key.charCodeAt(i)) % this.capacity;
    }
    return hashVal;
  }

  /**
   * Inserts a key-value pair into the hash table.
   * Uses linear probing for collision resolution.
   * @param key - The key to be inserted.
   * @param value - The value to be associated with the key.
   */
  insert(key: string, value: number): void {
    const temp = new HashNode(key, value);
    let hashIndex = this.hash(key);

    while (this.arr[hashIndex] !== null && this.arr[hashIndex]!.key !== key && this.arr[hashIndex]!.key !== this.dummy.key) {
      hashIndex++;
      hashIndex %= this.capacity;
    }

    if (this.arr[hashIndex] === null || this.arr[hashIndex]!.key === this.dummy.key) {
      this.size++;
    }
    this.arr[hashIndex] = temp;
  }

  /**
   * Deletes a key-value pair from the hash table.
   * Uses linear probing to find the key.
   * @param key - The key to be deleted.
   * @returns The value associated with the deleted key, or null if the key was not found.
   */
  delete(key: string): number | null {
    let hashIndex = this.hash(key);

    while (this.arr[hashIndex] !== null) {
      if (this.arr[hashIndex]!.key === key) {
        const temp = this.arr[hashIndex]!;
        this.arr[hashIndex] = this.dummy;
        this.size--;
        return temp.value;
      }
      hashIndex++;
      hashIndex %= this.capacity;
    }

    return null;
  }

  /**
   * Retrieves the value associated with a given key.
   * Uses linear probing to find the key.
   * @param key - The key to be searched.
   * @returns The value associated with the key, or null if the key was not found.
   */
  get(key: string): number | null {
    let hashIndex = this.hash(key);
    let counter = 0;

    while (this.arr[hashIndex] !== null) {
      if (counter++ > this.capacity) {
        return null;
      }

      if (this.arr[hashIndex]!.key === key) {
        return this.arr[hashIndex]!.value;
      }
      hashIndex++;
      hashIndex %= this.capacity;
    }

    return null;
  }

  /**
   * Displays all key-value pairs in the hash table.
   */
  display(): void {
    for (let i = 0; i < this.capacity; i++) {
      if (this.arr[i] !== null && this.arr[i]!.key !== this.dummy.key) {
        console.log(`index = ${i}, key = ${this.arr[i]!.key}, value = ${this.arr[i]!.value}`);
      }
    }
  }

  /**
   * Returns the current size (number of key-value pairs) of the hash table.
   * @returns The size of the hash table.
   */
  getSize(): number {
    return this.size;
  }

  /**
   * Checks if the hash table is empty.
   * @returns True if the hash table is empty, false otherwise.
   */
  isEmpty(): boolean {
    return this.size === 0;
  }
}

export default CustomHashTable;
