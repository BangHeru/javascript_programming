/*
Constructor function
Constructor functions technically are regular functions. There are two conventions though:

They are named with capital letter first.
They should be executed only with "new" operator.
*/

class User {
    constructor(name) {
        this.name = name;
        this.isAdmin = false;
    };
    
    setAge(age) {
        this.age = age;
    };

    getAge(){
        return this.age;
    };

    removeAge(){
        delete this.age;
    };
}
  
let user = new User("Jack");
  
console.log(user.name); // Jack
console.log(user.isAdmin); // false

user.isAdmin = true;
console.log(user);

user.setAge(18);
console.log(user);

user.removeAge();
console.log(user);