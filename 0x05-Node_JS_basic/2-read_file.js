const fs = require('fs');

function countStudents(path) {
    try {
        const data = fs.readFileSync(path, 'utf8');
        const lines = data.split('\n');
        const nonEmptyLines = lines.filter(line => line.trim() !== '');
        const totalStudent = nonEmptyLines.length;
        const fieldCounts = {};

        nonEmptyLines.forEach(line => { 
            const [, field, students] = line.split(',');

            if (!fieldCounts[field]) {
                fieldCounts[field] = {
                    count: 1,
                    list: [students.trim()],
                };
            } else {
                fieldCounts[field].count += 1;
                fieldCounts[field].list.push(students.trim());
            }
        });

        console.log(`Number of students: ${totalStudents}`);

        Object.keys(fieldCounts).forEach(field => {
            const count = fieldCounts[field].count;
            const list = fieldCounts[field].list.join(', ');
            console.log(`Number of students in ${field}: ${count}. List: ${list}`);
        });
    } catch (error) {
        throw new Error(`Cannot load the database`);
    }
}

module.exports = countStudents;
