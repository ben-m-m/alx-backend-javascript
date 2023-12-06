export default function createIteratorObject(report) {
  let currentDepartmentIndex = 0;
  let currentEmployeeIndex = 0;

  const departments = Object.keys(report.allEmployees);

  return {
    next() {
      if (currentDepartmentIndex < departments.length) {
        const currentDepartment = departments[currentDepartmentIndex];
        const employees = report.allEmployees[currentDepartment];
        const currentEmployee = employees[currentEmployeeIndex];

        if (currentEmployeeIndex < employees.length - 1) {
          currentEmployeeIndex += 1;
        } else {
          currentEmployeeIndex = 0;
          currentDepartmentIndex += 1;
        }

        return { value: currentEmployee, done: false };
      }

      return { done: true };
    },

    [Symbol.iterator]() {
      return this;
    },
  };
}
