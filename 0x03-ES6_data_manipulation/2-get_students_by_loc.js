export default function getStudentsByLocation(students, city) {
  if (Array.isArray(students) !== true) {
    return [];
  }
  return students.filter((student) => student.location === city);
}
