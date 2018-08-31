const Stack = require('./stackClass');
const { peek, display } = require('./stackMethods');

// 1. Create a Stack class with core functions - (push, pop)
// Create a stack called starTrek and add Kirk, Spock, McCoy, Scotty

function main() {
  // make a new Stack
  let starTrek = new Stack();

  // add the following items
  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');

  peek(starTrek);
  display(starTrek);
}

//main();


// 3. Check for palindromes using stack
// a b c b a
// check the first half with the last half (what's being popped)
// push first, if string of i === s.pop() str.length / 2, reverse string += pop

function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  let stack = new Stack;
  let reverseString = "";
  for (let i=0; i < s.length; i++) {
    stack.push(s[i]);
  }
  let node = stack.top;

  console.log("stack", JSON.stringify(stack, null, 2));
  while (node.next !== null) {
    reverseString += stack.pop();

  }
  console.log("reverse string", reverseString)
}

// true, true, true
console.log(is_palindrome("fish"));
//console.log(is_palindrome("dad"));
// console.log(is_palindrome("A man, a plan, a canal: Panama"));
// console.log(is_palindrome("1001"));
// console.log(is_palindrome("Tauhida"));



// 4. Matching parentheses in an expression



// 5. Sort Stack



// 6. Create a Queue class



// 7. Queue Implementation using Stack



// 8. Square dance pairing
