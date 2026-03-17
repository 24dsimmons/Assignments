// hw8_stacks.js
// CIST 0265 — Week 8 Homework: Stacks

// ─── Provided Stack Class (do not modify) ──────────────
class Stack {
  #items = [];
  push(item)   { this.#items.push(item); }
  pop()        { return this.#items.pop(); }
  peek()       { return this.#items[this.#items.length - 1]; }
  isEmpty()    { return this.#items.length === 0; }
  get size()   { return this.#items.length; }
  clear()      { this.#items = []; }
  toString()   { return [...this.#items].reverse().join(' | '); }
}

// ════════════════════════════════════════════
// EXERCISE 4 — Multi-Base Converter  (15 pts)
// ════════════════════════════════════════════
// Extend the decimal→binary idea from the slides.
// TODO: convert a decimal number to any base (2–16).

//Notes: decimal to binary conversion explained... 
// From my understanding say we start with 25 we divide it by 2 we get a remainder of 1 and 12 is 
// the whole number we are left to divide by 2 next this continues until we can no longer divide.
// The decimal is the number we start with.... the base is what we are dividing by. 
const DIGITS = "0123456789ABCDEF";

function baseConverter(decimal, base) {
  const stack = new Stack();
  let number = decimal;

  if (base< 2 || base > 16) // Limits base to being between 2-16
  {
    throw new Error("Base must be between 2 and 16!")
  }
  while (number > 0) { // as long as our decimal is bigger than 0 the loop continues!
    const remainder = number % base; // this is keeping the remainder from each division problem.
    stack.push(remainder); // This pushes the current remainder to the top of the stack. 
    number = Math.floor(number / base); // Ensures only whole numbers are divided. 
  }

  let result = ""; // Creates result as an empty string. 

  while (!stack.isEmpty()) { // Means "While the stack is NOT empty continue the loop."
    result += DIGITS[stack.pop()]; // removes the top item from the stack! and adds the digit to result.
  } // result is a string as previously mentioned so the numbers being removed from the stack arent added together
  //But they are kept in the sequence as follows "1" + "1" == 11
  return result;
  
}
console.log(baseConverter(17, 2))
console.log(baseConverter(25, 4))

// ════════════════════════════════════════════
// EXERCISE 5 — Balanced Symbols Checker  (20 pts)
// ════════════════════════════════════════════
// Extend the parentheses example from the slides.
// Also handle [], {} — and skip non-bracket characters.
// TODO: return true if all symbols are balanced, false otherwise.
function isBalanced(str) {

  const stack = new Stack();

  for (let char of str) { // Loops through each charactrer in the input 

    if (char === "(" || char === "[" || char === "{") {
        stack.push(char); // Pushes opening characters to the stack for reference later!
    }

    else if (char === ")" || char === "]" || char === "}") {

        if (stack.isEmpty()){ // If we see a closing bracket but nothing is in the stack that means there is NO opening bracket.
            //So we return false. 
            return false;
        }

        const top = stack.pop();

        if ( // Comparision to see if other half is there and if not we return false!
            (char === ")" && top !== "(") ||
            (char === "]" && top !== "[") ||
            (char === "}" && top !== "{")
        ){
            return false;
        }

    }

  }

  return stack.isEmpty();
}

console.log(isBalanced("()"));
console.log(isBalanced("[()]"));
// ════════════════════════════════════════════
// EXERCISE 6 — BONUS: Browser History  (15 pts)
// ════════════════════════════════════════════
// Use two stacks to simulate Back / Forward navigation.
class BrowserHistory {
  #back    = new Stack(); // pages you can go back to
  #forward = new Stack(); // pages you can go forward to
  #current = null;        // page currently displayed

  // TODO: visit(url) — push current to #back, clear #forward, set #current.
  visit(url) { /* YOUR CODE HERE */ }

  // TODO: back() — push #current to #forward, pop #back to #current.
  back()    { /* YOUR CODE HERE */ return this.#current ?? "No history"; }

  // TODO: forward() — mirror of back().
  forward() { /* YOUR CODE HERE */ return this.#current ?? "No forward history"; }

  current() { return this.#current; }
}

module.exports = { baseConverter, isBalanced, BrowserHistory };