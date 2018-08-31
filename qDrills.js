const Queue = require('./queueClass');
const Stack = require('./stackClass');

function main(){

// Create a queue called starTrekQ and add Kirk, Spock, Uhura, Sulu, Checkov to the queue.

  const starTrekQ = new Queue();
  //kirk <- spock <- uhura <- sulu <- checkov <-
  starTrekQ.enqueue('Kirk');
  starTrekQ.enqueue('Spock');
  starTrekQ.enqueue('Uhura');
  starTrekQ.enqueue('Sulu');
  starTrekQ.enqueue('Checkov');

  //   console.log(starTrekQ);
  // Implement a peek() function outside to Queue class that lets you take a peek at what's the first item in the queue

  function peek(q){
    return q.first;
  }

  //   console.log(peek(starTrekQ));
  // Implement a display() function outside the Queue class that lets you display what's in the queue.

  function display(q){
    let node=q.first; 
    while(node !== null){
      console.log(node);
      node = node.next;
    }
  }
  //   display(starTrekQ);

  // Remove Spock from the queue and display the resulting queue.
  starTrekQ.dequeue();
  starTrekQ.dequeue();
  console.log(starTrekQ);

  const stack1 = new Stack();

  function makeQueue(stack) { 
  const queue = new Queue();
  let node = stack.top;

  while (stack.top !== null) {
    queue.enqueue(stack.pop());
    node = node.next;
  }

  }

}

main();