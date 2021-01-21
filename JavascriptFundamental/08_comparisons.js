/*
Comparisons
We know many comparison operators from maths.

In JavaScript they are written like this:

1. Greater/less than: a > b, a < b.
2. Greater/less than or equals: a >= b, a <= b.
3. Equals: a == b, please note the double equality sign == means the equality test, while a single one a = b means an assignment.
4. Not equals. In maths the notation is ≠, but in JavaScript it’s written as a != b.

*/


/*
Boolean is the result
All comparison operators return a boolean value:

true – means “yes”, “correct” or “the truth”.
false – means “no”, “wrong” or “not the truth”.
*/

console.log( 2 > 1 );  // true (correct)
console.log( 2 == 1 ); // false (wrong)
console.log( 2 != 1 ); // true (correct)

let result = 5 > 4; // assign the result of the comparison
console.log( result ); // true


/*
String comparison
To see whether a string is greater than another, JavaScript uses the so-called “dictionary” or 
“lexicographical” order.

In other words, strings are compared letter-by-letter.
*/

console.log( 'Z' > 'A' ); // true
console.log( 'Glow' > 'Glee' ); // true
console.log( 'Bee' > 'Be' ); // true

/*
In the first example above, the comparison 'Z' > 'A' gets to a result at the first step.

The second comparison 'Glow' and 'Glee' needs more steps as strings are compared character-by-character:

G is the same as G.
l is the same as l.
o is greater than e. Stop here. The first string is greater.
*/



/*
Strict equality
A regular equality check == has a problem. It cannot differentiate 0 from false:
*/

console.log( 0 == false ); // true

console.log( '' == false ); // true