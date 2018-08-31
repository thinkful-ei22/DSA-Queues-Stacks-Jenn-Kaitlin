const Stack = require('./stackClass');

// 2. Useful methods for stack


function peek(stack){
  console.log(stack.top.data); 
}

function display(stack){
  console.log(JSON.stringify(stack, null, 2));
}

module.exports = {
  peek, 
  display};