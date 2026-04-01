// hw10_linked_lists.js
// CIST 0265 — Week 10 Homework: Linked Lists

// ─── Provided Node + LinkedList classes (do not modify constructor names) ─────
class Node {
 constructor(value) {
this.value = value;
this.next = null;
 }
}

class LinkedList {
 constructor() {
this.head = null;
this.size = 0;
 }

 append(value) {
const newNode = new Node(value);
if (!this.head) {
this.head = newNode;
 } else {
let current = this.head;
while (current.next) current = current.next;
current.next = newNode;
 }
this.size++;
 }

 toArray() {
const result = [];
let current = this.head;
while (current) {
result.push(current.value);
current = current.next;
 }
return result;
 }
}

// ════════════════════════════════════════════
// EXERCISE 1 — Linked List Traversal & Search
// ════════════════════════════════════════════
const numbers = new LinkedList();
numbers.append(10);
numbers.append(20);
numbers.append(30);
numbers.append(40);

// TODO 1a: Return the number of nodes in the list by traversal,
// not by using list.size.
function countNodes(list) {
let x = 0
let current = list.head;
 while (current !== null) {
    x++;
    current = current.next
 }
 return x;
}

console.log(countNodes(numbers))

// TODO 1b: Return true if target exists in the list, false otherwise.
function containsValue(list, target) {
let current = list.head;
while (current !== null) {
    console.log("Current Value: ", current.value, "Target:", target,  current.value === target);
    current = current.next;
    }
        
}

console.log(containsValue(numbers, 20))

// TODO 1c: Return the sum of all node values in the list.
function sumList(list) {
    let total = 0;
    let current = list.head;

    while (current !== null) {
        total += parseInt(current.value);
        current = current.next;
    }
    return total;
}

console.log(sumList(numbers))

// ════════════════════════════════════════════
// EXERCISE 2 — Insertions / Deletions 
// ════════════════════════════════════════════

const number2 = new LinkedList
number2.append(15)
number2.append(3)
number2.append(74)

// TODO 2a: prepend(list, value)
// Insert a new node at the front of the list.
function prepend(list, value) {
    const newNode = new Node(value); // Create Node!
    newNode.next = list.head;
    list.head = newNode
}

prepend(number2, 45)
console.log(countNodes(number2))


// TODO 2b: removeFirst(list)
// Remove and return the first node's value.
// Return null if the list is empty.
function removeFirst(list) {
if (list.head === null){
    return null;
}

const value = list.head.value;
list.head = list.head.next;
return value;
}
console.log(removeFirst(number2))
console.log(countNodes(number2))

// TODO 2c: insertAfter(list, target, value)
// Insert value immediately after the first occurrence of target.
// Return true if inserted, false if target not found.
function insertAfter(list, target, value) {
let current =list.head;

while (current !== null){
    if (current.value ===target){
        const newNode = new Node(value);

        newNode.next = current.next;
        current.next = newNode;
        return true;
    }
    current =current.next;
  }
  return false;
}

insertAfter(number2, 3, 20)
console.log(countNodes(number2))

// ════════════════════════════════════════════
// EXERCISE 3 — BONUS: Reverse a Linked List 
// ════════════════════════════════════════════
// Reverse the list in-place and return the list.
// Example: 10 -> 20 -> 30 becomes 30 -> 20 -> 10
function reverseList(list) {
// YOUR CODE HERE
}

module.exports = {
 Node,
 LinkedList,
 countNodes,
 containsValue,
 sumList,
 prepend,
 removeFirst,
 insertAfter,
 reverseList
};