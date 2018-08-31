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
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  let stack = new Stack;
  let reverseString = '';
  for (let i=0; i < s.length; i++) {
    stack.push(s[i]);
  }

  // console.log(JSON.stringify(stack.top.data));

  while (stack.top !== null) {
    reverseString += stack.pop();
  }

  // console.log("reverse string", reverseString)

  if (reverseString === s) {
    return true;
  } else {
    return false;
  }
}

// true, true, true
// console.log(is_palindrome("fish"));
// console.log(is_palindrome("dad"));
// console.log(is_palindrome("A man, a plan, a canal: Panama"));
// console.log(is_palindrome("1001"));
// console.log(is_palindrome("Tauhida"));



// 4. Matching parentheses in an expression
// write a function that takes an arithmetic expression as an argument and returns the position in the expression where a parenthesis is missing or incorrect
// input: (()
// output: 

function parenthesesMatch(expr) {
  let stack = new Stack;
  let parenthesesCheck = 0;
  let position = 0;

  for(let i=0; i< expr.length; i++){
    stack.push(expr[i]);
    if(expr[i]===')'){
      parenthesesCheck++;
      position = i;
    }
    if(expr[i]==='('){
      parenthesesCheck--;
      position = i;
    }
  }
  if(parenthesesCheck === 1){
    return `Expected ( at ${position}.`;  
  }
  if(parenthesesCheck === -1){
    return `Expected ) at ${position}.`; 
  }
  else{
    return 'Matched!';
  }
}

// console.log(parenthesesMatch('(()'));


// 5. Sort Stack
// 1 -> 5 -> 2 -> 6 (top)
// add to stack
// make new stack
// loop through the stack and compare each num w/ previous num
// push to new stack when we find biggest number
// 6 -> 5 -> 2 -> 1 (top)

// Write a program to sort a stack such that the smallest items are on the top (in ascending order). You can use an additional stack, but you may not use any other data structure (such as an array, or linked list).

let numStack = new Stack();
numStack.push(1);
numStack.push(5);
numStack.push(2);
numStack.push(6);

function sortStack(stack) {

  const tempStack = new Stack();

  while (stack.top !== null) {
    let temp = stack.pop();

    while ((tempStack.top !== null) && (peek(tempStack) > temp)) {
      // console.log(peek(orderedStack));
      stack.push(tempStack.pop());
    }
    tempStack.push(temp);
  }

  console.log(JSON.stringify(tempStack));

  while (tempStack.top !== null) {
    stack.push(tempStack.pop());
  }

  console.log('This is the ordered stack', JSON.stringify(stack));
}

// sortStack(numStack);



// 6. Create a Queue class



// 7. Queue Implementation using Stack



// 8. Square dance pairing
