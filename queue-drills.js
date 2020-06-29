'use strict';

class _Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    }

    enqueue(data) {
        const node = new _Node(data);

        if (this.first === null) {
            this.first = node; 
        }
        if (this.last) {
            this.last.next = node;
        }
        this.last = node;
    }

    dequeue() {
        if (this.first === null) {
            return;
        }
        
        const node = this.first;
        this.first = this.first.next;

        if (node === this.last) {
            this.last = null; 
        }

        return node.value;
    }
}

const starTrekQ = new Queue();

starTrekQ.enqueue('Kirk');
starTrekQ.enqueue('Spock');
starTrekQ.enqueue('Uhura');
starTrekQ.enqueue('Sulu');
starTrekQ.enqueue('Checkov');

function peek(Queue) {
    if (Queue.first === null) {
        return console.log('No items in queue');
    }
    return Queue.first.value;
}

function isEmpty(Queue) {
    if (Queue.first === null) {
        return console.log('Queue is empty');
    }
    else {
        return console.log('Queue has items');
    }
}

function display(Queue) {
    if (Queue.first === null) {
        return console.log('Queue is empty');
    }
    else if (Queue.first !== null) {
        let previous = Queue.first; 
        let curr = Queue.first.next;
        let next = Queue.first.next.next;

        if (next !== null) {
            prev = next.next;
        }
    }
}