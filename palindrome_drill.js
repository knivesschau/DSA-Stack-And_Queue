const Stack = require('./stack_constructor');

function isPalindrome(s) {
    const str = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");

    let stack = new Stack();

    for (let i = 0; i < str.length; i++) {
        stack.push(str.charAt(i));
    }

    for (let j = 0; j < str.length; j++) {
        if (str[j] === stack.pop()) {
            continue;
        }
        else {
            return false; 
        }
    }
    return true;
}

console.log(isPalindrome("dad"));
console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("1001"));
console.log(isPalindrome("Tauhida"));