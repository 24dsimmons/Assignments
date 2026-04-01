// hw10_collections.js
// CIST 0265 — Week 10 Homework: Sets, Dictionaries, and Hashes

// ════════════════════════════════════════════
// EXERCISE 4 — Set Operations 
// ════════════════════════════════════════════
const setA = new Set([1, 2, 3, 4]);
const setB = new Set([3, 4, 5, 6]);

// TODO 4a: Return a new Set containing the union of a and b.

function union(a, b) {
const result = new Set(a);
 for (const elm of b) {
    result.add(elm);
 }
 return result;
}
console.log(union(setA, setB))
// TODO 4b: Return a new Set containing the intersection of a and b.
function intersection(a, b) {
const inter = a.intersection(b)
return inter
}
console.log(intersection(setA, setB))

// TODO 4c: Return a new Set containing values in a but not in b.
function difference(a, b) {
const diff = b.difference(a)
return diff;
 
}
console.log(difference(setA, setB))

// TODO 4d: Return true if every value in subset exists in superset.
const test = new Set ([3, 4])

function isSubset(subset, superset) {

for (const num of subset){
   if(!superset.has(num)){
    return false;
   }
  }
  return true;
}
console.log("Subset(True):", isSubset(test, setA))
console.log("Subset(False):", isSubset(setA, setB))

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
   if (map.has(item)) {
   const current = map.get(item);
   map .set (item, current + qty);
   }
   else {
      map.set(item, qty)
   }
}
addOrUpdateItem(inventory, "apples", 5)
console.log(inventory.get("apples"))

addOrUpdateItem(inventory, "grapes", 5)
console.log(inventory.get ("grapes"))


// TODO 5b: totalQuantity(map)
// Return the sum of all quantities stored in the map.


function totalQuantity(map) {
   let total_sum =0;

   for (let value of map.values()){
      total_sum += value;
   
}
return total_sum;
}
console.log(totalQuantity(inventory))

// TODO 5c: itemsBelowThreshold(map, threshold)
// Return an array of item names whose quantity is < threshold.


function itemsBelowThreshold(map, threshold) {
const values_list = [];

   for (let [key, value] of map){
      if (value < threshold){
         values_list.push(key)
      }   
   }
   return values_list;
}

console.log(itemsBelowThreshold(inventory, 7))
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