'use strict';

class _Node {
    constructor(value, next = null, prev = null) {
        this.value = value; 
        this.next = next; 
        this.prev = prev;
    }
}

class DoubleQueue {
    constructor(head, tail) {
        this.first = null;
        this.last = null; 
    }

    enqueue(data) {
        let newNode = new _Node(data); 

        if (!this.last) {
            this.first = newNode;
            this.last = newNode;
            return;
        }
        
        this.last.next = newNode;
        newNode.prev = this.last; 
        this.last = newNode; 
    }

    dequeue() {
        if (!this.first) {
            return;
        }

        const tempNode = this.first; 

        if (!this.first.next) {
            this.first = null;
            this.last = null;
            return tempNode.data;
        }

        this.first = this.first.next;
        this.first.prev = null;
        return tempNode.data; 
    }

    display() {
        let results = '';
        let tempNode = this.first; 
        
        while (tempNode.next) {
            results += `${tempNode.data}`; 
            tempNode = tempNode.next;
        }

        console.log(results + tempNode.data);
    }
}

module.exports = DoubleQueue; 