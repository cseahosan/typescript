"use strict";
// function multiply(a: number, b: number){ //explicit type
//     return a * b;
// }
// console.log(multiply(10, 20))
// // array
// let fruits = ['apple', 'banana'];
// // fruits.push(34); //error. only for string
// let flowers = [];
// flowers.push(10) // ok for any
// let mixed = ['apple', 10, true];
// mixed.push(20); // ok for string, number. bool
// object
// let person = {
//     name: 'Ahosan',
//     age: 30,
//     isProgrammer: true
// };
// // person.name = 10 //error
// person.name = 'Habib'// ok
// person.country = 'Bangladesh'; //error because country is not in the object
//Explicit type
// variables
let a;
let b;
// array
let arr1;
let arr2 = [];
let arr3 = []; //union type
// object
let obj1; //anything can be inside object
obj1 = {
    name: 'Ahosan',
    age: 30
};
obj1 = []; // also accepted, because array also an object
let obj2;
obj2 = {
    name: 'Ahosan',
    age: 30,
    adult: true
};
