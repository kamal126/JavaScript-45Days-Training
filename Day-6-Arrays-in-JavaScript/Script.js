// Arrays examples

// Array Creation
let fruits = ["Apple", "Banana", "Cherry"];
console.log("Initial Fruits Array:", fruits); // Output: Initial Fruits Array: [ 'Apple', 'Banana', 'Cherry' ]

// Array Methods
fruits.push("Mango");
console.log("After Push:", fruits); // Output: After Push: [ 'Apple', 'Banana', 'Cherry', 'Mango' ]

fruits.pop();
console.log("After Pop:", fruits); // Output: After Pop: [ 'Apple', 'Banana', 'Cherry' ]

fruits.shift();
console.log("After Shift:", fruits); // Output: After Shift: [ 'Banana', 'Cherry' ]

fruits.unshift("Strawberry");
console.log("After Unshift:", fruits); // Output: After Unshift: [ 'Strawberry', 'Banana', 'Cherry' ]

let citrus = fruits.slice(1, 3);
console.log("Slice from Fruits:", citrus); // Output: Slice from Fruits: [ 'Banana', 'Cherry' ]

fruits.splice(1, 1, "Orange");
console.log("After Splice:", fruits); // Output: After Splice: [ 'Strawberry', 'Orange', 'Cherry' ]

// Looping through Arrays
console.log("\nUsing for loop:");
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

console.log("\nUsing forEach():");
fruits.forEach(function(fruit) {
    console.log(fruit);
});
