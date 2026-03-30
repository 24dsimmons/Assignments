// hw10_collections.js
// CIST 0265 — Week 10 Homework: Sets, Dictionaries, and Hashes

// ════════════════════════════════════════════
// EXERCISE 4 — Set Operations 
// ════════════════════════════════════════════
const setA = new Set([1, 2, 3, 4]);
const setB = new Set([3, 4, 5, 6]);

// TODO 4a: Return a new Set containing the union of a and b.
function union(a, b) {
// YOUR CODE HERE
}

// TODO 4b: Return a new Set containing the intersection of a and b.
function intersection(a, b) {
// YOUR CODE HERE
}

// TODO 4c: Return a new Set containing values in a but not in b.
function difference(a, b) {
// YOUR CODE HERE
}

// TODO 4d: Return true if every value in subset exists in superset.
function isSubset(subset, superset) {
// YOUR CODE HERE
}

// ════════════════════════════════════════════
// EXERCISE 5 — Dictionary / Map Practice 
// ════════════════════════════════════════════
const inventory = new Map([
 ["apples", 10],
 ["bananas", 5],
 ["oranges", 8]
]);

// TODO 5a: addOrUpdateItem(map, item, qty)
// If item exists, increase its quantity by qty.
// If item does not exist, add it with qty.
function addOrUpdateItem(map, item, qty) {
// YOUR CODE HERE
}

// TODO 5b: totalQuantity(map)
// Return the sum of all quantities stored in the map.
function totalQuantity(map) {
// YOUR CODE HERE
}

// TODO 5c: itemsBelowThreshold(map, threshold)
// Return an array of item names whose quantity is < threshold.
function itemsBelowThreshold(map, threshold) {
// YOUR CODE HERE
}

// ════════════════════════════════════════════
// EXERCISE 6 — BONUS: Simple Hash Function 
// ════════════════════════════════════════════
// Write a hash function that sums character codes and
// compresses into the table size using modulo.
// Example: hash("cat", 10) → some integer from 0 to 9
function simpleHash(key, tableSize) {
// YOUR CODE HERE
}

// BONUS 6b: groupByFirstLetter(words)
// Return an object where each key is a first letter and
// each value is an array of words that begin with that letter.
function groupByFirstLetter(words) {
// YOUR CODE HERE
}

module.exports = {
 union,
 intersection,
 difference,
 isSubset,
 addOrUpdateItem,
 totalQuantity,
 itemsBelowThreshold,
 simpleHash,
 groupByFirstLetter
};