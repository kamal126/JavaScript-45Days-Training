
/**
 * Create a student object with  properties name, age, and a method introduce() jo student ka naam aur umar print kare.
 */

const student = {
    name: "Kamal Ch&ra",
    age: 21,
    inroduce: function(){
        console.log(this.name);
        console.log(this.age);
    }
};

student.inroduce();
// Kamal Ch&ra
// 21

