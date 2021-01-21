/*
The "switch" statement
A switch statement can replace multiple if checks.

It gives a more descriptive way to compare a value with multiple variants.

The syntax
The switch has one or more case blocks and an optional default.

It looks like this:

switch(x) {
  case 'value1':  // if (x === 'value1')
    ...
    [break]

  case 'value2':  // if (x === 'value2')
    ...
    [break]

  default:
    ...
    [break]
}

*/

let a = 2 + 3;

switch (a) {
  case 3:
    console.log( 'Too small' );
    break;
  case 4:
    console.log( 'Exactly!' );
    break;
  case 5:
    console.log( 'Too large' );
    break;
  default:
    console.log( "I don't know such values" );
}


/*
Grouping of “case”
Several variants of case which share the same code can be grouped.

For example, if we want the same code to run for case 3 and case 5:
*/


a = 3;

switch (a) {
  case 4:
    console.log('Right!');
    break;

  case 3: // (*) grouped two cases
  case 5:
    console.log('Wrong!');
    console.log("Why don't you take a math class?");
    break;

  default:
    console.log('The result is strange. Really.');
}