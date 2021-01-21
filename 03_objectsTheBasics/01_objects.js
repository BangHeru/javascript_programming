/*
Objects
As we know from the chapter Data types, there are eight data types in JavaScript. Seven of them are called “primitive”, because their values contain only a single thing (be it a string or a number or whatever).

In contrast, objects are used to store keyed collections of various data and more complex entities. In JavaScript, objects penetrate almost every aspect of the language. So we must understand them first before going in-depth anywhere else.

An object can be created with figure brackets {…} with an optional list of properties. A property is a “key: value” pair, where key is a string (also called a “property name”), and value can be anything.

We can imagine an object as a cabinet with signed files. Every piece of data is stored in its file by the key. It’s easy to find a file by its name or add/remove a file.
*/

let user = new Object(); // "object constructor" syntax
let user2 = {};  // "object literal" syntax

let user3 = {     // an object
    name: "John",  // by key "name" store value "John"
    age: 30,        // by key "age" store value 30
    "likes birds": true  // multiword property name must be quoted
  };

console.log(user3.name);
console.log(user3)

user3.name = "Gunawan";
console.log(user3.name);

user3.isAdmin = true;

console.log(user3.isAdmin);

console.log(user3)

delete user3.age;
console.log(user3)

console.log(user3['name']);
console.log(user3['likes birds']);


function makeUser(name, age) {
    return {
      name: name,
      age: age,
      // ...other properties
    };
  }
  
  let newUser = makeUser("John", 30);
  console.log(newUser); // John

  console.log( "name" in newUser ); // true, user.age exists
  console.log( "blabla" in newUser ); // false, user.blabla doesn't exist

  for (let key in user3) {
    // keys
    console.log( key );  // name, age, isAdmin
    // values for the keys
    console.log( user3[key] ); // John, 30, true
  }



  /*
  Ordered like an object
Are objects ordered? In other words, if we loop over an object, do we get all properties in the same order they were added? Can we rely on this?

The short answer is: “ordered in a special fashion”: integer properties are sorted, others appear in creation order. The details follow.

As an example, let’s consider an object with the phone codes:
*/

let codes = {
    "49": "Germany",
    "41": "Switzerland",
    "44": "Great Britain",
    // ..,
    "1": "USA"
  };
  
  for (let code in codes) {
    console.log(code); // 1, 41, 44, 49
  }
 
 