'use strict';

const Stack = require('./stack_constructor');

function peek(stack) {
    if (stack.top) {
        return stack.top.data;
    }
}

function isEmpty(stack) {
    return stack.top === null;
}

function display(stack) {
    if (isEmpty(stack)) {
        return;
    }

    let tempTop = stack.top;

    while (tempTop !== null) {
        console.log(tempTop.data);
        tempTop = tempTop.next;
    }
}

function sortStack(unsorted) {
   const tempStack = new Stack();

   let tempNode;

   while (unsorted.top !== null) {
       tempNode = unsorted.pop();

       while (tempStack.top !== null && tempStack.top.data > tempNode) {
           unsorted.push(tempStack.pop());
       }
       tempStack.push(tempNode);
   }
   return tempStack;
}

module.exports = {
    peek,
    isEmpty, 
    display,
    sortStack
}