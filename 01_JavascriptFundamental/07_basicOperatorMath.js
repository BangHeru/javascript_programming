/*
Basic operators, maths
We know many operators from school. They are things like addition +, 
multiplication *, subtraction -, and so on.

In this chapter, we’ll start with simple operators, then concentrate 
on JavaScript-specific aspects, not covered by school arithmetic.
*/

/*
Maths
The following math operations are supported:

Addition +,
Subtraction -,
Multiplication *,
Division /,
Remainder %,
Exponentiation **.
*/

/*
Remainder %
The remainder operator %, despite its appearance, is not related 
to percents.

The result of a % b is the remainder of the integer division of a by b.
*/

console.log( 5 % 2 ); // 1, a remainder of 5 divided by 2
console.log( 8 % 3 ); // 2, a remainder of 8 divided by 3


/*
Exponentiation **
The exponentiation operator a ** b multiplies a by itself b times.

*/

console.log( 2 ** 2 ); // 4  (2 multiplied by itself 2 times)
console.log( 2 ** 3 ); // 8  (2 * 2 * 2, 3 times)
console.log( 2 ** 4 ); // 16 (2 * 2 * 2 * 2, 4 times)

console.log( 4 ** (1/2) ); // 2 (power of 1/2 is the same as a square root)
console.log( 8 ** (1/3) ); // 2 (power of 1/3 is the same as a cubic root)


/*
String concatenation with binary +
Let’s meet features of JavaScript operators that are beyond school 
arithmetics.

Usually, the plus operator + sums numbers.
*/
let s = "my" + "String";
console.log(s); // mystring

console.log( '1' + 2 ); // "12"
console.log( 2 + '1' ); // "21"

console.log(2 + 2 + '1' ); // "41" and not "221"

/*
Numeric conversion, unary +
The plus + exists in two forms: the binary form that we used above and 
the unary form.

The unary plus or, in other words, the plus operator + applied to 
a single value, doesn’t do anything to numbers. But if the operand is 
not a number, the unary plus converts it into a number.

*/

// No effect on numbers
let x = 1;
console.log( +x ); // 1

let y = -2;
console.log( +y ); // -2

// Converts non-numbers
console.log( +true ); // 1
console.log( +"" );   // 0

let apples = "2";
let oranges = "3";

console.log( apples + oranges ); // "23", the binary plus concatenates strings

// both values converted to numbers before the binary plus
console.log( +apples + +oranges ); // 5

// the longer variant
console.log( Number(apples) + Number(oranges) ); // 5


let a = 1, b = 1;
let c = ++a;
let d = b++;

console.log("c = " + c);
console.log("d = " + d);

a = 2;

x = 1 + (a *= 2);
console.log("x = " + x);

