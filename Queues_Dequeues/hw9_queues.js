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
  const queue = new Queue(players.length);

  for (const player of players) {
    queue.enqueue(player);
  }

  while (queue.size > 1) {
    for (let i =0; i < numPasses -1 ; i++) {
      queue.enqueue(queue.dequeue());
    }
    console.log(`${queue.dequeue()} is eliminated!`)
  }
  return queue.dequeue();
}

console.log("Winner:", hotPotato(["alice", "Bob", "Carol", "David", "Eve"], 7))

function hotPotatoLog(players, numPasses) {
  const queue = new Queue(players.length);
  const eliminated = [];
  
  for (const player of players) {
    queue.enqueue(player);
  }

  while (queue.size > 1) {
    for (let i =0; i < numPasses -1 ; i++) {
      queue.enqueue(queue.dequeue());
    }
    const out = queue.dequeue();
    eliminated.push(out)
  }
  const winner = queue.dequeue();

  return {eliminated, winner};
}
 const result =hotPotatoLog(["Alice", "Bob", "Steven"], 2)

 console.log("Eliminated:", result.eliminated)
 console.log("Winner:", result.winner)

// ════════════════════════════════════════════
// EXERCISE 3 — BONUS: Josephus Problem  (15 pts)
// ════════════════════════════════════════════
function josephus(n, k) {
  const queue = new Queue();
  // YOUR CODE HERE
}

module.exports = { loadPrintQueue, processPrintQueue, totalPages, hotPotato, hotPotatoLog, josephus };