
// 1. objects in javaScript:
// obkect ko key value pair main store kiya jata hai

// object creation
const student = {
    name: "Kamal chandra",
    age: 21,
    course: "CSE",
    specilization: "core"
};

console.log(student.name);
console.log(student["age"]);

/**------------------output---------------
    Kamal chandra
    21
    CSE
    core
    ----------------------------------------*/

/* 
    2. Accessing Object Properties:

        object's properties access two type 
    i) dot notation     ii) bracket notation
*/
console.log(student["course"]); // CSE
console.log(student.specilization); // core
console.log(student["name"]);   // Kamal chandra

/**--------------------------------------------------- */

//Methods in javaScript:
/**
 * Methods defined in the inside of objects. Ye kisi specific object ke liye kaam karte hai.
 */

const car = {
    brand: "Kingfisher",
    model: "S Class",
    //start method
    start: function(){
        console.log("car started.");
    },
    //stop method
    stop: function(){
        console.log("Car stopped.");
    }
};

car.start(); // car started.
car.stop(); // Car stopped.

/**------------------------------------------------- */

// 4. 'this' Keyword in objects:
/**
 * Obj mtd mai this keywrd ka use hota hai => to refer to the curnt obj properties.
 */
const person = {
    firstName: "Vijya",
    secondName: "Malya",
    fullName: function(){
        return this.firstName+" "+this.secondName;
    }
};

console.log(person.fullName()); // Vijya Malya
/**----------------------------------------------------- */

// 5. Usefull Object Methods:
/**
 * 1. Object.keys() => obj's all keys return in array ke form
 * 2. Object.values() => all values return in array ke form mai
 * 3. Object.entries() => return key-value pairs in array form
 */
const user = {
    userName: "Kamal Ch&ra",
    password: "********",
    otp: "0973"
};

console.log(Object.keys(user)); // [ 'userName', 'password', 'otp' ]
console.log(Object.values(user)); // [ 'Kamal Ch&ra', '********', '0973' ]
console.log(Object.entries(user));
/**
[
  [ 'userName', 'Kamal Ch&ra' ],
  [ 'password', '********' ],
  [ 'otp', '0973' ]
]
--------------------------------------------------------------------------------*/

// 6. Adding and Deling Properties:
//Add a new property
user.email = "officialkamal@galgotiasuniversity.edu.co.in";;
console.log(user.email); // officialkamal@galgotiasuniversity.edu.co.in

// Deleting a property
delete user.otp;
console.log(user.otp); // undefined










