'use strict';

const Queue = require('./DLL_queue_constructor');

function main() {
    const DoubleQueue = new Queue();

    DoubleQueue.enqueue("Kirk");
    DoubleQueue.enqueue("Spock");
    DoubleQueue.enqueue("Uhura");
    DoubleQueue.enqueue("Sulu");
    DoubleQueue.enqueue("Checkov");

    console.log(DoubleQueue);
}

main();