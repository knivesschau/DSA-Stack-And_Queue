const Stack = require('./stack_constructor');
const {peek, isEmpty, display, sortStack} = require('./stack_helpers');

function main() {
    const starTrek = new Stack();

    starTrek.push("Kirk");
    starTrek.push("Spock");
    starTrek.push("McCoy");
    starTrek.push("Scotty");

    console.log(peek(starTrek));
    console.log(isEmpty(starTrek));
    starTrek.pop("McCoy");
    console.log(display(starTrek));
    const sorted = sortStack(starTrek);
    console.log(display(sorted));
}

main(); 