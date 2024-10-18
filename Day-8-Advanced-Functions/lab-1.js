/**
 * Create a calculator using callback functions:

Write functions for add, subtract, multiply, and divide.
Pass these functions as callbacks into a calculate function.
 */

function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}

function calculate(a,b, operation){
    return operation(a,b);
};

console.log(calculate(4,6,add));    // 10
console.log(calculate(7,3,subtract));   // 4
console.log(calculate(3,5,multiply));   // 15
console.log(calculate(12,4,divide));    // 3
