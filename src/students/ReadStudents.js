const fs = require("fs");

const requireStudents = () => {
  try {
    return JSON.parse(fs.readFileSync("studens.json"));
  } catch (error) {
    return [];
  }
};

const readStudents = () => {
  try {
    const students = JSON.parse(fs.readFileSync("studens.json") || []);
    return (
      "Todos los estudiantes \n" +
      students
        .map((student) => {
          return `
        N° expediente: ${student.id}\n
        Nombre: ${student.name}\n
        Nota 1: ${student.one}\n
        Nota 2: ${student.two}\n
        Nota 3: ${student.three}\n
        _________________________\n
    `;
        })
        .join("")
    );
  } catch (error) {
    return "Lista vacia";
  }
};

const readBestStudents = () => {
  try {
    const students = JSON.parse(fs.readFileSync("studens.json") || []);
    return (
      "Mejores estudiantes \n" +
      students
        .map((student) => {
          if ((student.one + student.two + student.three) / 3 < 7.0) {
            return;
          }
          return `
        N° expediente: ${student.id}\n
        Nombre: ${student.name}\n
        Nota 1: ${student.one}\n
        Nota 2: ${student.two}\n
        Nota 3: ${student.three}\n
        _________________________\n
      `;
        })
        .join("")
    );
  } catch (error) {
    return "Lista vacia";
  }
};

exports.read = requireStudents;
exports.print = readStudents;
exports.printBetter = readBestStudents;
