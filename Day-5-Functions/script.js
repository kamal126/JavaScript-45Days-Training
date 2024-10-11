/* Day-5-Functions */

// Functions examples

// Function Declaration
function greet() {
    console.log("Hello, World!");
}
greet(); // Output: Hello, World!

// Function Expression
const greetExpression = function() {
    console.log("Hello from Function Expression!");
};
greetExpression(); // Output: Hello from Function Expression!

// Parameters and Arguments
function add(a, b) {
    return a + b;
}
let sum = add(5, 3);
console.log("Sum:", sum); // Output: Sum: 8

// Return Statement
function square(x) {
    return x * x;
}
let result = square(4);
console.log("Square:", result); // Output: Square: 16

// Arrow Functions
const addArrow = (a, b) => {
    return a + b;
};
let sumArrow = addArrow(5, 3);
console.log("Sum using Arrow Function:", sumArrow); // Output: Sum using Arrow Function: 8

// Single-line Arrow Function
const squareArrow = x => x * x;
console.log("Square using Arrow Function:", squareArrow(5)); // Output: Square using Arrow Function: 25
