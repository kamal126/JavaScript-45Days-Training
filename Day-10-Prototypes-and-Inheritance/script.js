/**
1. Prototypes in JavaScript:
JavaScript mein har object ke paas ek prototype hota hai, jo ek aur object hota hai jisse wo properties aur methods inherit kar sakta hai. Ye prototype chain ke through kaam karta hai.
 */
const animal = {
    eats: true,
    walk: function() {
        console.log("Animal is walking");
    }
};

// `dog` object ko animal ka prototype milta hai
const dog = Object.create(animal);
dog.barks = true;

console.log(dog.eats);  // true (inherited from animal)
dog.walk();  // Animal is walking (inherited method)
console.log(dog.barks);  // true (dog ka apna property)


/**
 * 2. Prototype Inheritance:
Inheritance ka matlab hai ki ek object doosre object ki properties aur methods ko access kar sakta hai. JavaScript mein inheritance prototype chain ke through hoti hai.
 */
const person = {
    name: "Unknown",
    greet: function() {
        console.log(`Hello, I am ${this.name}`);
    }
};

// Student object person se inherit karega
const student = Object.create(person);
student.name = "Kamal";

student.greet();  // Hello, I am Kamal

/**
 * 3. Constructor Functions:
Constructor functions ka use kar ke hum multiple similar objects bana sakte hain. Prototype ke through sab objects common methods share karte hain.
 */
// Constructor function
function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

// Adding method to Car's prototype
Car.prototype.start = function() {
    console.log(`${this.brand} ${this.model} is starting`);
};

const car1 = new Car("Tesla", "Model S");
const car2 = new Car("BMW", "i8");

car1.start();  // Tesla Model S is starting
car2.start();  // BMW i8 is starting

/**
 * 4. Object.create() Method:
Object.create() ka use karke hum ek object ko doosre object se inherit karwa sakte hain bina constructor function ka use kiye.
 */
const machine = {
    isRunning: false,
    start: function() {
        this.isRunning = true;
        console.log("Machine started");
    }
};

const washingMachine = Object.create(machine);
washingMachine.start();  // Machine started
console.log(washingMachine.isRunning);  // true

/**
 * 5. ES6 Classes:
ES6 ke baad, JavaScript mein class syntax introduce kiya gaya inheritance aur object creation ko easy aur readable banane ke liye.
 */
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);  // Calling parent class constructor
    }

    speak() {
        console.log(`${this.name} barks.`);
    }
}

let dog1 = new Dog("Rex");
dog1.speak();  // Rex barks.


/**
 * output full script
true
Animal is walking
true
Hello, I am Kamal
Tesla Model S is starting
BMW i8 is starting
Machine started
true
Rex barks.
 */