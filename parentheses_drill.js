const Stack = require('./stack_constructor');

function parentheses(string) {
    const newStack = new Stack();

    for (let i = 0; i < string.length; i++) {
        if (string[i] === '(') {
            newStack.push(string[i]);
        }

        if (string[i] === ')') {
            if (newStack.pop() === null) {
                return false;
            }
        }
    }
    return(newStack.top === null);
}

console.log(parentheses('thi(()s is a test ()))'));