const fs = require('fs');

/**
 * Counts the students in a CSV data file.
 * @param {String} dataPath The path to the CSV data file.
 * @returns {Promise<Boolean>} A promise that resolves to true if successful.
 */
const countStudents = (dataPath) => new Promise((resolve, reject) => {
  fs.readFile(dataPath, 'utf-8', (err, data) => {
    try {
      if (err) {
        // Change 1: Use reject instead of throwing an error
        reject(new Error('Cannot load the database'));
        return; // Added return to exit the function
      }

      const fileLines = data.trim().split('\n');
      const studentGroups = {};
      const dbFieldNames = fileLines[0].split(',');
      const studentPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1);

      for (const line of fileLines.slice(1)) {
        const studentRecord = line.split(',');
        const studentPropValues = studentRecord.slice(
          0,
          studentRecord.length - 1,
        );
        const field = studentRecord[studentRecord.length - 1];
        studentGroups[field] = studentGroups[field] || [];
        const studentEntries = studentPropNames.map((propName, idx) => [
          propName,
          studentPropValues[idx],
        ]);
        studentGroups[field].push(Object.fromEntries(studentEntries));
      }

      // Change 2: Simplify the totalStudents calculation
      const totalStudents = Object.values(studentGroups).flat().length;
      console.log(`Number of students: ${totalStudents}`);

      for (const [field, group] of Object.entries(studentGroups)) {
        const studentNames = group
          .map((student) => student.firstname)
          .join(', ');
        console.log(
          `Number of students in ${field}: ${group.length}. List: ${studentNames}`,
        );
      }

      resolve(true);
    } catch (error) {
      // Change 3: Use reject instead of throwing an error
      reject(error);
    }
  });
});

module.exports = countStudents;
