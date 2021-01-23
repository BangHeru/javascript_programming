/*
Object references and copying
One of the fundamental differences of objects versus primitives is that objects are stored and copied “by reference”, whereas primitive values: strings, numbers, booleans, etc – are always copied “as a whole value”.

That’s easy to understand if we look a bit under the hood of what happens when we copy a value.

Let’s start with a primitive, such as a string.

Here we put a copy of message into phrase:
*/


let message = "Hello!";
let phrase = message;

console.log(message);
console.log(phrase);

let user = {
    name: "John"
  };

let copyUser = user;
console.log(user);

copyUser['age'] = 18;
console.log(copyUser);