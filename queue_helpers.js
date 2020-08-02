'use strict';

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
    if (isEmpty(Queue)) {
        return;
    }

    let tempTop = Queue.first;

    while (tempTop) {
        console.log(tempTop.value);
        tempTop = tempTop.next;
    }
}

module.exports = {
    peek, 
    isEmpty,
    display,
}