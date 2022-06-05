"use strict";
let myFunc; // function with first letter capital
// myFunc = 'a'; // error
myFunc = (a, b = 'console', c) => {
    console.log(`Hello  ${a} from function ${b}`);
};
myFunc('Ahosan');
