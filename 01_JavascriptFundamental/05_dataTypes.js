/*
Data types
A value in JavaScript is always of a certain type. For example, a string or a number.

There are eight basic data types in JavaScript. Here, we’ll cover them in general and in the next chapters we’ll talk about each of them in detail.

We can put any type in a variable. For example, a variable can at one moment be a string and then store a number:


*/


let message = "hello";
message = 123456;

/*
Number

The number type represents both integer and floating point numbers.

There are many operations for numbers, e.g. multiplication *, division /, addition +, subtraction -, and so on.
*/

let n = 123;
n = 12.345;



/*
BigInt
In JavaScript, the “number” type cannot represent integer values larger 
than (253-1) (that’s 9007199254740991), or less than -(253-1) for negatives. 
It’s a technical limitation caused by their internal representation.

*/

const bigInt = 1234567890123456789012345678901234567890n;


/*
String
A string in JavaScript must be surrounded by quotes.

*/

let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;


let name = "John";

// embed a variable
console.log( `Hello, ${name}!` ); // Hello, John!

// embed an expression
console.log( `the result is ${1 + 2}` ); // the result is 3



/*
Boolean (logical type)
The boolean type has only two values: true and false.

This type is commonly used to store yes/no values: true means 
“yes, correct”, and false means “no, incorrect”.

*/


let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked

let isGreater = 4 > 1;

console.log( isGreater ); // true (the comparison result is "yes")



/*
The “null” value
The special null value does not belong to any of the types described above.

It forms a separate type of its own which contains only the null value:

*/

let nama = null;


/*
The “undefined” value
The special value undefined also stands apart. It makes a type of its own, just like null.

The meaning of undefined is “value is not assigned”.

If a variable is declared, but not assigned, then its value is undefined:

*/

let age;

console.log(age); // shows "undefined"


