const argv = require("yargs").argv;

const readStudent = () => {
  const { id, name, n1, n2, n3 } = argv;
  if ((!id, !name, !n1, !n2, !n3)) return "Error";

  return (student = {
    id: id,
    name: name,
    one: n1,
    two: n2,
    three: n3,
  });
};

module.exports = readStudent;
