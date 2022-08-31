const createStudent = require("./students/CreateStudent.js");
const students = require("./students/ReadStudents.js");

createStudent(students.read());
console.log(students.printBetter());
console.log(students.print());
