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
    
}