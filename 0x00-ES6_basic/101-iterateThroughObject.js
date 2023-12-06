export default function iterateThroughObject(reportWithIterator) {
  let employeesList = '';
  for (const employee of reportWithIterator) {
    employeesList += `${employee} | `;
  }
  return employeesList.slice(0, -3);
}
