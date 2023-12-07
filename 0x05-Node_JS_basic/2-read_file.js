const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n');
    const students = lines
      .filter((line) => line)
      .map((line) => line.split(','))
      .slice(1);
    const NUMBER_OF_STUDENTS = students.length;
    console.log(`Number of students: ${NUMBER_OF_STUDENTS}`);
    const csStudents = students
      .filter((student) => student[3] === 'CS')
      .map((student) => student[0]);
    const SWEStudents = students
      .filter((student) => student[3] === 'SWE')
      .map((student) => student[0]);
    console.log(
      `Number of students in CS: ${csStudents.length}. List: ${csStudents.join(
        ', ',
      )}`,
    );
    console.log(
      `Number of students in SWE: ${
        SWEStudents.length
      }. List: ${SWEStudents.join(', ')}`,
    );
  } catch (error) {
    throw Error('Cannot load the database');
  }
}

module.exports = countStudents;
