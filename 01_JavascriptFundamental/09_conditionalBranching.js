/*
Conditional branching: if, '?'
Sometimes, we need to perform different actions based on different conditions.

To do that, we can use the if statement and the conditional operator ?, 
that’s also called a “question mark” operator.
*/


/*
The “if” statement
The if(...) statement evaluates a condition in parentheses and, if the result is true, 
executes a block of code.
*/

let year = 2014;

if (year == 2015) {
    console.log( "That's correct!" );
    console.log( "You're so smart!" );
  }


  if (year == 2015) {
    console.log( 'You guessed it right!' );
  } else {
    console.log( 'How can you be so wrong?' ); // any value except 2015
  }


  if (year < 2015) {
    console.log( 'Too early...' );
  } else if (year > 2015) {
    console.log( 'Too late' );
  } else {
    console.log( 'Exactly!' );
  }



let age = 117;

let accessAllowed = (age > 18) ? true : false;

console.log(accessAllowed);

let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';

console.log( message );


if("0") {
    console.log('Hello');
}


/*
Using the if..else construct, write the code which asks: ‘What is the “official” name of JavaScript?’

If the visitor enters “ECMAScript”, then output “Right!”, otherwise – output: “Didn’t know? ECMAScript!”
*/
let officialName = "ECMAScript";

if (officialName == "ECMAScript") {
    console.log("Right");
}else{
    console.log('You dont know ? "ECMAScript"!');
}


/*
Using if..else, write the code which gets a number via prompt and then shows in alert:

1, if the value is greater than zero,
-1, if less than zero,
0, if equals zero.
*/
let setNumber = -2;

if(setNumber > 0){
    console.log("1");
}else if(setNumber < 0){
    console.log("-1");
}else{
    console.log("0");
}


/*
Rewrite this if using the conditional operator '?':

let hasil;

if (a + b < 4) {
  hasil = 'Below';
} else {
  hasil = 'Over';
}
*/
let hasilA = 2;
let hasilB = 2;

let hasil = (hasilA + hasilB < 4) ? 'Below' : 'Over';
console.log(hasil)


/*
Rewrite if..else using multiple ternary operators '?'.

For readability, it’s recommended to split the code into multiple lines.

let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}
*/


let login = 'Employee';

let pesan = (login == 'Employee') ? 'Hello' :
            (login == 'Director') ? 'Greetings' :
            (login == '') ? 'No login' :
            '';
console.log(pesan);