/*
Functions
Quite often we need to perform a similar action in many places of the script.

For example, we need to show a nice-looking message when a visitor logs in, logs out and maybe somewhere else.

Functions are the main “building blocks” of the program. They allow the code to be called many times without repetition.

We’ve already seen examples of built-in functions, like alert(message), prompt(message, default) and confirm(question). But we can create functions of our own as well.

Function Declaration
To create a function we can use a function declaration.

It looks like this:

function showMessage() {
  alert( 'Hello everyone!' );
}

*/

function showMessage() {
    let message = "Hello, I'm JavaScript!"; // local variable
    console.log( message );
  }
  
  showMessage();
//   console.log(message); // <-- Error! The variable is local to the function

/*
Outer variables
A function can access an outer variable as well, for example:
*/

let userName = 'John';

function showMessage2() {
  let message = 'Hello, ' + userName;
  console.log(message);
}

showMessage2(); // Hello, John

function showMessage3() {
    userName = "Bob"; // (1) changed the outer variable
  
    let message = 'Hello, ' + userName;
    console.log(message);
  }
  
  console.log( userName ); // John before the function call
  
  showMessage3();
  
  console.log( userName ); // Bob, the value was modified by the function


  /*
  Parameters
We can pass arbitrary data to functions using parameters (also called function arguments) .

In the example below, the function has two parameters: from and text.
*/

function showMessageWithParam(from, text) { // arguments: from, text
    console.log(from + ' : ' + text);
  }
  
  showMessageWithParam('Ann', 'Hello!'); // Ann: Hello! (*)
  showMessageWithParam('Ann', "What's up?"); // Ann: What's up? (**)


function showMessageWithParam2(from, text='no text given') { // arguments: from, text
    console.log(from + ' : ' + text);
  }
  
  showMessageWithParam2('Ann'); 
  showMessageWithParam2('Ann','Halloooo....'); 


  /*
  Returning a value
A function can return a value back into the calling code as the result.

The simplest example would be a function that sums two values:

*/

function sum(a, b) {
    return a + b;
  }
  
let result = sum(1, 2);
console.log( result ); // 3


function checkAge(age) {
    if (age >= 18) {
      return true;
    } else {
      return console.log('Do you have permission from your parents?');
    }
  }
  
let age = 17;

if ( checkAge(age) ) {
    console.log( 'Access granted' );
} else {
    console.log( 'Access denied' );
}