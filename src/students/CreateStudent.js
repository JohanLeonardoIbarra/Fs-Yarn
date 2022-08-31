const fs = require("fs");
const rl = require("../control/ReadLine.js");

const createStudent = async (students) => {
  const student = rl();
  if (validateGrades(student.one, student.two, student.three)) {
    console.log("Rango de notas invalido");
    return;
  }
  students.push(student);
  fs.writeFileSync("studens.json", JSON.stringify(students));
};

const validateGrades = (...grades) => {
  return grades.some((grade) => isNaN(grade) || grade < 0 || grade > 10);
};

module.exports = createStudent;
