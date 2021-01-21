/*
Arrow functions, the basics
There’s another very simple and concise syntax for creating functions, that’s often better than Function Expressions.

It’s called “arrow functions”, because it looks like this:

let func = (arg1, arg2, ...argN) => expression


let func = function(arg1, arg2, ...argN) {
  return expression;
};

*/

let sum = (a, b) => a + b;

/* This arrow function is a shorter form of:

let sum = function(a, b) {
  return a + b;
};
*/

console.log( sum(1, 2) ); // 3

let tambah = function(a, b) {
    return a + b;
}

console.log(tambah(2,2));


// If there are no arguments, parentheses will be empty (but they should be present):
let sayHi = () => console.log("Hello!");

sayHi();


let age =  18;

let welcome = (age < 18) ?
  () => console.log('Hello') :
  () => console.log("Greetings!");

welcome();