// hw9_queues.js
// CIST 0265 — Week 9 Homework: Queues

// ─── Provided Queue Class (do not modify) ──────────────
class Queue {
  #items = [];
  enqueue(item) { this.#items.push(item); }
  dequeue()     { return this.#items.shift(); }
  front()       { return this.#items[0]; }
  isEmpty()     { return this.#items.length === 0; }
  get size()    { return this.#items.length; }
  clear()       { this.#items = []; }
  toString()    { return this.#items.join(" <- "); }
}

// ════════════════════════════════════════════
// EXERCISE 1 — Print Queue Simulator  (15 pts)
// ════════════════════════════════════════════
const printJobs = [
  { id: 1, name: "Resume.pdf",       pages: 2  },
  { id: 2, name: "CoverLetter.pdf",  pages: 1  },
  { id: 3, name: "Portfolio.pdf",    pages: 18 },
  { id: 4, name: "References.pdf",   pages: 1  },
];

function loadPrintQueue(jobs) {
  const queue = new Queue();
  // YOUR CODE HERE
}

function processPrintQueue(queue) {
  const printed = [];
  // YOUR CODE HERE
  return printed;
}

function totalPages(jobs) {
  // YOUR CODE HERE
}

// ════════════════════════════════════════════
// EXERCISE 2 — Hot Potato Simulation  (20 pts)
// ════════════════════════════════════════════
function hotPotato(players, numPasses) {
  const queue = new Queue();
  // YOUR CODE HERE
}

function hotPotatoLog(players, numPasses) {
  const queue = new Queue();
  const eliminated = [];
  // YOUR CODE HERE
  // return { winner: ..., eliminated };
}

// ════════════════════════════════════════════
// EXERCISE 3 — BONUS: Josephus Problem  (15 pts)
// ════════════════════════════════════════════
function josephus(n, k) {
  const queue = new Queue();
  // YOUR CODE HERE
}

module.exports = { loadPrintQueue, processPrintQueue, totalPages, hotPotato, hotPotatoLog, josephus };