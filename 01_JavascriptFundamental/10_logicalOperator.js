/*
Logical operators
There are three logical operators in JavaScript: || (OR), && (AND), ! (NOT).

Although they are called “logical”, they can be applied to values of any type, not only boolean. Their result can also be of any type.
*/

/*
|| (OR)
The “OR” operator is represented with two vertical line symbols:
*/

console.log( true || true );   // true
console.log( false || true );  // true
console.log( true || false );  // true
console.log( false || false ); // false

if (1 || 0) { // works just like if( true || false )
    console.log( 'truthy!' );
  }

  let hour = 9;

  if (hour < 10 || hour > 18) {
    console.log( 'The office is closed.' );
  }

  let isWeekend = true;
  if (hour < 10 || hour > 18 || isWeekend) {
    console.log( 'The office is closed.' ); // it is the weekend
  }


  /*
  && (AND)
The AND operator is represented with two ampersands &&:

*/

console.log( true && true );   // true
console.log( false && true );  // false
console.log( true && false );  // false
console.log( false && false ); // false
