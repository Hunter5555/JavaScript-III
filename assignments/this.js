/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
*1. Implicit Binding: when an function is called with a dot, the object before the dot is "this".
*2. Window/global object binding:when global, "this" is the window/console.
*3. Explicit binding: When a "call" or "apply" method is used, "this" is explicitly defined
*4. New binding:When a constructor function is used, "this" refers to the object created by the constructor function
*
* write out a code example of each explanation above
*/

//1:
console.log(this);
//2:
const person = {
    name: 'bobo',
    speak() {
        console.log(`Hello from ${this.name}.`)
    }
};

person.speak();
//3:
const dude = {
    fullName: function() {
    return `${this.firstName} ${this.lastName};`
}
};

const jack = {
    firstName: 'jack',
    lastName: 'Bower'
};
console.log(dude.fullName.call(jack));
//4:
function Animal(attr) {
    this.type = attr.type;
    this.name = attr.name;
    this.sound = attr.sound;
}
Animal.prototype.speak = function() {
    console.log(`${this.name}, a ${this.type}, says, ${this.sound}`);
}

const dog = new Animal({
    type: 'dog',
    name: 'jerry',
    sound: 'woof woof',
});
dog.prototype = Object.create(Animal.prototype);
dog.speak();

// Principle 1


// code example for Window Binding

// Principle 2

// code example for Implicit Binding

// Principle 3

// code example for Explicit Binding

// Principle 4

// code example for New Binding
