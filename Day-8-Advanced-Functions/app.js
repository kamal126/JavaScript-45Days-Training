/**
 * Topics to Cover:
    *  Arrow Functions: A more concise way to write functions in JavaScript.
    *  Callback Functions: Functions that are passed as arguments to other functions and executed later.
    *  Anonymous Functions: Functions without a name, often used as arguments or returned from other functions.
    *  Higher-order Functions: Functions that take other functions as arguments or return them.
    *  "this" keyword: Refers to the current object or context in which the function is executed.
    *  IIFE (Immediately Invoked Function Expression): A function that runs as soon as it’s defined.
 */

/** Arrow Function */
// regular function

function add(a,b) {
    return a+b;
}

// Arrow Function
const addArrow = (a,b) => a+b;

console.log(add(5,3));  // 8
console.log(addArrow(5,6)); // 11

// ==========================================

/** Callback Function: */
function greetUser(name, Callback) {
    console.log("Hello, "+ name);
    Callback();
}

function showMsg(){
    console.log("welcome to the JS Training.");
}

greetUser("kamal", showMsg);
// Hello, kamal
// welcome to the JS Training.

// ==========================================================

/** Anonymous Functions: */
// Anonymous function as a callback
setTimeout(function() {
    console.log("This message will appear after 2 seconds.");
}, 2000);

// waiting for 2 second than print....
// This message will apper after 2 second.
// ====================================================================

/** Higher-order Functions: */
function processNumbers(arr, callback){
    const result = [];
    for(let num of arr){
        result.push(callback(num));
    }
    return result;
}

function square(num){
    return num * num;
}

let numbers = [1,2,3,4,5];
let squareNumbers = processNumbers(numbers, square);

console.log(squareNumbers);
//[ 1, 4, 9, 16, 25 ]

// =========================================================

/** 5. The "this" keyword: */
const user = {
    name: "kamal",
    regularFunction: function(){
        console.log("Hello, "+ this.name + " by regular function");
    },
    arrowFunction: () => {
        console.log("Hello, "+ this.name + " by Arrow function");
    }
};

user.regularFunction(); //Hello, kamal by regular function
user.arrowFunction(); // Hello, undefined by Arrow function
// Hello, undefined (because 'this' refers to parent scope)
// ==================================================================

/** 6. IIFE (Immediately Invoked Function Expression): */

(function() {
    console.log("This function runs immediately!");
})();
// This function runs immediately!



