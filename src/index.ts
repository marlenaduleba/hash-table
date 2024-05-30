/**
 * Entry point for the CustomHashTable demonstration.
 * Demonstrates the usage of the CustomHashTable class.
 */
import CustomHashTable from "./CustomHashTable.js";

const hashTable = new CustomHashTable();

console.log("=== Inserting key-value pairs ===");
hashTable.insert("key1", 1);
hashTable.insert("key2", 2);
hashTable.insert("key3", 3);

// Retrieve values
console.log("\n=== Retrieving values ===");
console.log(`Value for key1: ${hashTable.get("key1")}`); // Output: 1
console.log(`Value for key2: ${hashTable.get("key2")}`); // Output: 2
console.log(`Value for key3: ${hashTable.get("key3")}`); // Output: 3

// Delete a key
console.log("\n=== Deleting a key (key2) ===");
hashTable.delete("key2");

// Display all key-value pairs
console.log("\n=== Displaying all key-value pairs ===");
hashTable.display();

// Check size and if table is empty
console.log("\n=== Checking size and emptiness of the hash table ===");
console.log(`Size: ${hashTable.getSize()}`); // Output: Size: 2
console.log(`Is Empty: ${hashTable.isEmpty()}`); // Output: Is Empty: false

// These keys are chosen to cause collisions.
const key1 = "xyz";
const key2 = "zyx";

// Calculate the hash values for both keys.
console.log("\n=== Demonstrating hash collisions ===");
console.log(`Hash for ${key1}: ${hashTable.hash(key1)}`); // Assuming the same hash value for both keys
console.log(`Hash for ${key2}: ${hashTable.hash(key2)}`);

// Insert values into the hash table.
console.log("\n=== Inserting colliding keys ===");
hashTable.insert(key1, 1);
hashTable.insert(key2, 2);

// Display the values in the hash table.
console.log("\n=== Displaying all key-value pairs after collisions ===");
hashTable.display();

console.log("\n=== Final state of the hash table ===");
console.log(hashTable);
