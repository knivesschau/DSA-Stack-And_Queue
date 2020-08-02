'use strict';

const Queue = require('./queue_constructor');
const {peek, display, isEmpty} = require('./queue_helpers');

function main() {
    const starTrekQ = new Queue();

    starTrekQ.enqueue('Kirk');
    starTrekQ.enqueue('Spock');
    starTrekQ.enqueue('Uhura');
    starTrekQ.enqueue('Sulu');
    starTrekQ.enqueue('Checkov');

    console.log(peek(starTrekQ));
    console.log(isEmpty(starTrekQ));

    starTrekQ.dequeue('Spock');
    console.log(display(starTrekQ));
}

main();