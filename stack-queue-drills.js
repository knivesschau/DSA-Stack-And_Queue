'use strict';

class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    push(data) {
        if (this.top === null) {
            this.top = new _Node(data, null);
            return this.top;
        }
        const node = new _Node(data, this.top);
        this.top = node;
    }

    pop() {
        const node = this.top; 
        this.top = node.next;
        return node.data;
    }
}

const starTrek = new Stack();
starTrek.push('Kirk');
starTrek.push('Spock');
starTrek.push('McCoy');
starTrek.push('Scotty');
starTrek.pop('McCoy');

function peek(Stack) {
    if (Stack.top) {
        return Stack.top.value;
    }
}

function isEmpty(Stack) {
    return Stack.top === null;
}

function display(Stack) {
    if (isEmpty(Stack)) {
        return;
    }

    let tempTop = stack.top;

    while (tempTop !== null) {
        console.log(tempTop.value);
        tempTop = tempTop.next;
    }
}

function is_palindrome(s) {
    const s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");

    let reversal = new Stack();

    for (let i = 0; i < s.length; i++) {
        reversal.push(s.charAt(i));
    }

    for (let j = 0; j < s.length; j++) {
        if (s[j] === reversal.pop()) {
            continue;
        }
        else {
            return false; 
        }
    }
    return true;
}

function parentheses(string) {
    const newStack = new Stack();

    for (let i = 0; i < newStack.length; i++) {
        if (str[i] === '(' || str[i] === '[' || str[i] === '{') {
            newStack.push(str[i]);
        }
        if (str[i] === ')' || str[i] === ']' || str[i] === '}') {
            if (peek(newStack) === '[' && str[i] === ')') {
                newStack.pop();
            }
        }
        if (str[i] === ')' || stri[i] === ']' || str[i] === '}') {
            if (peek(newStack) === '[' && str[i] === ']') {
                newStack.pop();
            }
        }
        if (str[i] === ')' || str[i] === ']' || str[i] === '}') {
            if (peek(newStack) === '{' && str[i] === '}') {
                newStack.pop();
            }
        }
    }
    if (!newStack) {
        return false;
    }
    else {
        return true;
    }
}

function sortStack(input, tempStack = null, temp = null) {
    if (tempStack === null) {
        tempStack = new Stack();
    }
    if (input.top === null) {
        input = tempStack;
        return input;
    }
    temp = input.pop();

    if (tempStack.top === null || temp < tempStack.top.data) {
        return sortStack(input, tempStack)
    }
    else {
        while (tempStack.top !== null && temp < tempStack.top.data) {
            input.push(tempStack.pop());
        }
        tempStack.push(temp);
        return sortStack(input, tempStack)
    }
}