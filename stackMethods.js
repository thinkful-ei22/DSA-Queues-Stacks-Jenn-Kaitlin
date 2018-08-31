const Stack = require('./stackClass');

// 2. Useful methods for stack


function peek(stack){
  const node = stack.top;
  if (node) {
    return node.data;
  }
  else {
    console.log('Stack is empty');
    return false;
  }
}

function display(stack){
  console.log(JSON.stringify(stack, null, 2));
}

module.exports = {
  peek, 
  display};