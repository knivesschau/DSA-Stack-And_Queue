'use strict';

class _Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next; 
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    push(data) {
        if (!this.top) {
            this.top = new _Node(data);
            return this.top;
        }

        const node = new _Node(data, this.top);
        this.top = node; 
    }

    pop() {
        if (!this.top) {
            return null;
        }

        let removedItem = this.top; 
        this.top = this.top.next; 
        console.log(`popped: ${removedItem.data}`);
        return removedItem.data;
    }
}

class Queue {
    constructor() {
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }

    enqueue(data) {
        this.stack1.push(data);
    }

    dequeue() {
        if (!this.stack2.top) {
            if (!this.stack1.top) {
                return 'Queue is empty';
            }

            while (this.stack1.top) {
                let pop = this.stack1.pop();
                this.stack2.push(pop);
            }
        }
        return this.stack2.pop();
    }
}

const queue = new Queue();

queue.enqueue('Sara');
queue.enqueue('Jane');
queue.enqueue('Michelle');

console.log(queue.dequeue());