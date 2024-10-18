/**Create a list of student names:

Use higher-order functions to add a new student to the list, remove a student, and print all student names.  */

function studentOperation(arr, callback){
    return callback(arr);
}

// Add a new student
function addStudent(arr, newStudent){
    arr.push(newStudent);
    return arr;
}

// Remove a Student
function removeStudent(arr, remStudent){
    const index = arr.indexOf(remStudent);
    if(index > -1){
        arr.splice(index,1);
    }

    return arr;
}

// print student list
function printStudents(arr){
    console.log("Currunt Student List: ");
    // arr.forEach(student => {
        // console.log(student);
    // });

    console.log(student);

}

// Initial student list
let student =  ["Arav", "Katha", "Vihan", "Monkey"];

printStudents(student);

student = studentOperation(student, (arr)=> addStudent(arr,"Kamal"));
printStudents(student);

// Remove student
student = studentOperation(student, (arr) => removeStudent(arr, "Monkey"));
printStudents(student);