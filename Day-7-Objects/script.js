// Object examples

// creating an object
let car = {
    brand: "Toyota",
    model: "Fortuner",
    year: 2020
};

console.log("Car Object: ", car);

// Accesing Object properties
console.log("Car Brand: ",car.brand);
console.log("Car Model: ",car.model);
/*
Car Object:  { brand: 'Toyota', model: 'Fortuner', year: 2020 }
Car Brand:  Toyota
Car Model:  Fortuner
*/

// ================================================
// Object Method
let person = {
    name : "Kamal",
    age: "19",
    greet: function () {
        console.log("Hello, my name is \"" + this.name + "\" my age "+ this.age);
        
    }
};
person.greet();  // Hello, my name is "Kamal" my age 19

// ===================================================
// Iterateing over objects
console.log("\nIterating over Car Object:");
for(let key in car){
    console.log(key + ": " + car[key]);
}
/** 
 * Iterating over Car Object:
brand: Toyota
model: Fortuner
year: 2020
@author: Kamal Chandra
*/

/**
 * Practice Questions:
 */
console.log("\n Practice Quesion Creating Objects:");
book = {
    title: "JavaScript Complete Trainning",
    author: "Kamal Chandra",
    yearPublished: 2024,
    read : function () {
        console.log("You r reading \"" + this.title +"\" by \"" + this.author + "\"");
    }
}
book.read();
// You r reading "JavaScript Complete Trainning" by "Kamal Chandra"
// =====================================================

console.log("2. Accessing Properties:");
console.log("Book Obkect: "+ book);
console.log(book["title"]); // Bracket notation
console.log("Book Author is: "+ book.author);
console.log("Book published year is: "+ book.yearPublished);
/**
 * Book Obkect: [object Object]
Book Author is: JavaScript Complete Trainning
Book Author is: Kamal Chandra
Book published year is: 2024
 */

// 3. Modify properties
book.genre = "Coding";
console.log(book);
/**{
  title: 'JavaScript Complete Trainning',
  author: 'Kamal Chandra',
  yearPublished: 2024,
  read: [Function: read],
  genre: 'Coding'
} */

// 4. Modify the read method
book.read = function() {
    console.log("You are reading " + this.title + " by " + this.author + ". It was published in " + this.yearPublished + ".");
};
book.read(); // Call the modified method
// ou are reading JavaScript Complete Trainning by Kamal Chandra. It was published in 2024.

// 5. Create a student object and iterate over its properties
let student = {
    name: "Kunal",
    age: 21,
    university: "Galgotias",
    Course: "B.tech (Core CSE)",
    Batch: "2021-25",
    subjects: ["DSA", "OS", "DBMS", "DAA", "CC", "Networking"]
};

for (let key in student) {
    console.log(key + ": " + student[key]);
}
/**
name: Kunal
age: 21
university: Galgotias
Course: B.tech (Core CSE)
Batch: 2021-25
subjects: DSA,OS,DBMS,DAA,CC,Networking
 */



