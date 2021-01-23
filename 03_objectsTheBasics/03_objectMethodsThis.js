/*
Object methods, "this"
Objects are usually created to represent entities of the real world, like users, orders and so on:
*/

let user = {
    name: "John",
    age: 30,

    getAge(){
        return console.log(this.age);
    },

    sayHi: function() {
        console.log("Hello!");
      } 
  };



user.sayHi();  




//console.log(user); 
user.getAge();


let calculator = {
    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    },

    read(a, b) {
        this.a = a;
        this.b = b;
    }
}


calculator.read(4, 4);

console.log(calculator.sum());
console.log(calculator.mul());