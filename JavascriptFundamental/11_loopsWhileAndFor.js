/*
Loops: while and for
We often need to repeat actions.

For example, outputting goods from a list one after another or just running the same code for each number from 1 to 10.

Loops are a way to repeat the same code multiple times.


while (condition) {
  // code
  // so-called "loop body"
}

*/

let i = 0;
while (i < 3) { // shows 0, then 1, then 2
  console.log( i );
  i++;
}

while (i) { // when i becomes 0, the condition becomes falsy, and the loop stops
    console.log( i );
    i--;
  }


/*
The “do…while” loop
The condition check can be moved below the loop body using the do..while syntax:

do {
  // loop body
} while (condition);

*/


i = 0;
do {
  console.log( i );
  i++;
} while (i < 3);


/*
The “for” loop
The for loop is more complex, but it’s also the most commonly used loop.

It looks like this:

for (begin; condition; step) {
  // ... loop body ...
}

*/

for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
    console.log(i);
  }


  /*

Skipping parts
Any part of for can be skipped.

For example, we can omit begin if we don’t need to do anything at the loop start.

Like here:
*/

i = 0; // we have i already declared and assigned

for (; i < 3; i++) { // no need for "begin"
  console.log( i ); // 0, 1, 2
}

/*
Breaking the loop
Normally, a loop exits when its condition becomes falsy.

But we can force the exit at any time using the special break directive.

For example, the loop below asks the user for a series of numbers, “breaking” when no number is entered:

*/

// let sum = 0;

// while (true) {

//   let value = 3;

//   if (!value) break; // (*)

//   sum += value;

// }
// console.log( 'Sum: ' + sum );


i = 3;

while (i) {
  console.log( i-- );
}