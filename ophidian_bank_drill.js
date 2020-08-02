'use strict';

const Queue = require('./queue_constructor');

const customers = new Queue();

customers.enqueue('Brock');
customers.enqueue('Ash');
customers.enqueue('Misty');
customers.enqueue('Pikachu');

function bankQueue(queue) {
    while (queue.first) {
        let customer = queue.dequeue();
        let missingPpwk = Math.random();

        if (missingPpwk < .25) {
            queue.enqueue(customer);
            console.log(`${customer}'s finance paperwork is incorrect, so they were moved to the back of the line.`)
        }
        else {
            console.log(`${customer} serviced.`);
        }
    }
    console.log('Line empty!');
}

bankQueue(customers);
