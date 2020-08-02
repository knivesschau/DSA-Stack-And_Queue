'use strict';

const Queue = require('./queue_constructor');

function squareDance(dancers) {
    const maleQueue = new Queue();
    const femaleQueue = new Queue();
    
    dancers.forEach(dancer => {
        if (dancer[0] === 'F') {
            femaleQueue.enqueue(dancer);
        }
        else {
            maleQueue.enqueue(dancer);
        }

        if (femaleQueue.first && maleQueue.first) {
            let maleDancer = maleQueue.dequeue();
            let femaleDancer = femaleQueue.dequeue();

            console.log(`${femaleDancer} is paired with ${maleDancer}`); 
        }
    });

    if (maleQueue.length > 0) {
        console.log(`There are ${maleQueue.length} guys waiting for a partner`);
    }
    else if (femaleQueue.length > 0) {
        console.log(`There are ${femaleQueue.length} gals waiting for a partner`);
    }
}

console.log(squareDance([
    'F Michelle',
    'M Andrew',
    'M Alex',
    'M John',
    'F Kiki',
    'M Anthony',
    'F Rihanna',
    'F Mimi',
    'F Andy',
]));