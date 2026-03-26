// hw9_deques.js
// CIST 0265 — Week 9 Homework: Deques

// ─── Provided Deque Class (do not modify) ──────────────
class Deque {
  #items = [];
  addFront(item)  { this.#items.unshift(item); }
  addRear(item)   { this.#items.push(item); }
  removeFront()   { return this.#items.shift(); }
  removeRear()    { return this.#items.pop(); }
  peekFront()     { return this.#items[0]; }
  peekRear()      { return this.#items[this.#items.length - 1]; }
  isEmpty()       { return this.#items.length === 0; }
  getsize()      { return this.#items.length; }
  clear()         { this.#items = []; }
  toString()      { return this.#items.join(" | "); }
}

// ════════════════════════════════════════════
// EXERCISE 4 — Palindrome Checker  (15 pts)
// ════════════════════════════════════════════

function isPalindrome(word) {
  const deque = new Deque();
  if ( word === undefined ||
    word === null || 
    (typeof word === 'string' && word.length === 0)
  ){ return false;}

  word = word.toLowerCase().replace(/[^a-z]/g, '');
  for (let i =0; i < word.length; i++){
    deque.addRear(word[i]);
  }

  while (deque.getsize() > 1) {
    if (deque.removeFront() !== deque.removeRear()){
      return false;
    }
  }
  return true;
}

console.log(isPalindrome("racecar"))
console.log(isPalindrome("The"))

words = ['RaceCar', 'Godog', 'bob', 'dumpmud', "Pullupifipullup"]
let longest = '';

function longestPalindrome(words) {
  const deque = new Deque();
  if ( word === undefined ||
    word === null || 
    (typeof word === 'string' && word.length === 0)
  ){ return false;}

  word = word.toLowerCase().replace(/[^a-z]/g, '');
  for (let i =0; i < word.length; i++){
    deque.addRear(word[i]);
  }

  while (deque.getsize() > 1) {
    if (deque.removeFront() !== deque.removeRear()){
      return false;
    }
  }
  return true;

}
for (word of words)
   {
    if (word.length > longest.length){
      longest = word;
    }
  }
  console.log(words, longest);

// ════════════════════════════════════════════
// EXERCISE 5 — Task Scheduler  (20 pts)
// ════════════════════════════════════════════
class TaskScheduler {
  #deque = new Deque();

  addUrgent(task)  {
    this.#deque.addFront(task)
  }
  addRoutine(task) { this.#deque.addRear(task) }

  processNext() {
    if (this.#deque.isEmpty()) return null;

    const task = this.#deque.removeRear();
    return task; 
  }

  processLast() {
   if (this.#deque.isEmpty()) return null;

   const task = this.#deque.removeRear();
   return task;
  }

  processAll() {
    const results = [];
    while(!this.#deque.isEmpty()){
      results.push(this.processNext());
    }
    return results;
  }

  peek()     { return this.#deque.peekFront(); }
  get size() { return this.#deque.size; }
  toString() { return this.#deque.toString(); }
}

const scheduler = new TaskScheduler();
scheduler.addRoutine("Get Milk?");
scheduler.addRoutine("Take out trash!");
scheduler.addUrgent("Fight the segal in the mall parking lot!");

console.log("Next: ", scheduler.processNext());
console.log("Last: ", scheduler.processLast());

scheduler.addRoutine("Ran out of milk buy more?");

console.log ("All: ", scheduler.processAll());

// ════════════════════════════════════════════
// EXERCISE 6 — BONUS: Sliding Window Maximum  (15 pts)
// ════════════════════════════════════════════
function slidingWindowMax(nums, k) {
  const deque = new Deque();
  const result = [];
  // YOUR CODE HERE
  return result;
}

module.exports = { isPalindrome, longestPalindrome, TaskScheduler, slidingWindowMax };