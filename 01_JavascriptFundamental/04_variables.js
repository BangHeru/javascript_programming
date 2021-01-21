/*
A variable

A variable is a “named storage” for data. 
We can use variables to store goodies, visitors, and other data.

To create a variable in JavaScript, use the let keyword.

The statement below creates (in other words: declares) a variable with 
the name “message”:

*/

let pesan;

pesan = "Selama datang di Javascript";  // menyimpan data ke dalam variabel
console.log(pesan)


// merubah data yang telah tersimpan di dalam variabel
pesan = "Banyak hal yang dapat dilakukan dengan Javascript"
console.log(pesan);


// Some people also define multiple variables in this multiline style:
let user = 'John',
  age = 25,
  message = 'Hello';

console.log(user + ' ' + age + ' ' + message);


/*
Variable naming
There are two limitations on variable names in JavaScript:

1. The name must contain only letters, digits, or the symbols $ and _.
2. The first character must not be a digit.

*/

let userName;
let test123;


/*
Constants

To declare a constant (unchanging) variable, use const instead of let:
*/

const myBirthday = '18.04.1982';

//myBirthday = '01.01.2001'; // error, can't reassign the constant!

const jumHari = 7;
const pi = 3.14;


/*
Uppercase constants
There is a widespread practice to use constants as aliases for difficult-to-remember values that are known prior to execution.

Such constants are named using capital letters and underscores.

For instance, let’s make constants for colors in so-called “web” (hexadecimal) format:

*/


const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

console.log(COLOR_RED);