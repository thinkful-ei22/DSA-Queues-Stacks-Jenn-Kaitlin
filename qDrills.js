const Queue = require('./queueClass');

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

  /*
  stack 1=
    {
        v:1
        n: 3
    },
    {
        v: 3
        n: 5
    },
    {
        v: 5
        n: null
    } 
  stack 2=
    {
        v:2
        n: 4
    },
    {
        v: 4
        n: 6
    },
    {
        v: 6
        n: null
    } */
  //q = 1, 2, 3, 4, 5, 6 

  //nodeA =  stack1.pop();
//nodeB = stack2.pop();

//q.enqueue(nodeA.value) -> {v:1, n: null, p: null}
//q.first.prev = (nodeB.value) -> {v:1, n:{v:2, n:null, p: 1} p: null}
  //
}

main();