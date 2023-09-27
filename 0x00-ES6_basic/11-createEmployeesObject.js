export default function createEmployeesObject(departmentName, employees) {
  const map = { [departmentName]: employees };
  return map;
}
