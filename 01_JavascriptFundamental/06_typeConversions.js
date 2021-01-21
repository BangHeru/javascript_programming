/*
Type Conversions
Most of the time, operators and functions automatically convert the values 
given to them to the right type.

For example, alert automatically converts any value to a string to show 
it. Mathematical operations convert values to numbers.

There are also cases when we need to explicitly convert a value to the 
expected type.
*/


/*
String Conversion
String conversion happens when we need the string form of a value.

For example, alert(value) does it to show the value.

We can also call the String(value) function to convert a value 
to a string:

*/

let value = true;
console.log(typeof value); // boolean

value = String(value); // now value is a string "true"
console.log(typeof value); // string
console.log(value);



/*
Numeric Conversion
Numeric conversion happens in mathematical functions and expressions 
automatically.

For example, when division / is applied to non-numbers:
*/

console.log( "6" / "2" ); // 3, strings are converted to numbers

let str = "123";
console.log(typeof str); // string

let num = Number(str); // becomes a number 123

console.log(typeof num); // number



/*
Boolean Conversion
Boolean conversion is the simplest one.

It happens in logical operations (later we’ll meet condition tests and 
other similar things) but can also be performed explicitly with 
a call to Boolean(value).

*/

console.log( Boolean(1) ); // true
console.log( Boolean(0) ); // false

console.log( Boolean("hello") ); // true
console.log( Boolean("") ); // false