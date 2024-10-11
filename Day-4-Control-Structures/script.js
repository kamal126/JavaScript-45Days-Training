// Day-4-Control-Structures
// Control Structures examples

// Conditional Statements
let temperature = 30;

if (temperature > 25) {
    console.log("It's a hot day!");
} else if (temperature < 15) {
    console.log("It's a cold day!");
} else {
    console.log("It's a pleasant day!");
}

// Switch Statement
let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday"); // Output: Wednesday
        break;
    default:
        console.log("Invalid day");
}

// Loops
console.log("\nFor Loop:");
for (let i = 0; i < 5; i++) {
    console.log("Iteration: " + i);
}

console.log("\nWhile Loop:");
let j = 0;
while (j < 5) {
    console.log("Iteration: " + j);
    j++;
}

console.log("\nDo While Loop:");
let k = 0;
do {
    console.log("Iteration: " + k);
    k++;
} while (k < 5);
