const readDatabase = require('../utils');

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const students = await readDatabase(process.argv[2].toString());
      const output = ['This is the list of our students'];

      const keys = Object.keys(students).sort();

      for (const key of keys) {
        output.push(`Number of students in ${key}: ${students[key].length}. List: ${students[key].join(', ')}`);
      }

      res.status(200).send(output.join('\n'));
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    try {
      const field = req.params.major;
      const students = await readDatabase(process.argv[2].toString());

      if (!(field in students)) {
        res.status(500).send('Major parameter must be CS or SWE');
      } else {
        res.status(200).send(`List: ${students[field].join(', ')}`);
      }
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

module.exports = StudentsController;
