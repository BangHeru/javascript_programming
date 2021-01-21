/*
Function expressions
In JavaScript, a function is not a “magical language structure”, but a special kind of value.

The syntax that we used before is called a Function Declaration:


*/

function sayHi(name) {
    console.log( `Hello, ${name}` );
  }

/*
There is another syntax for creating a function that is called a Function Expression.

It looks like this:


let sayHi = function() {
    console.log( "Hello" );
  };

*/

sayHi('Heru');