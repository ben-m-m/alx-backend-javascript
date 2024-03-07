interface Student {
    firstname: string;
    lastname: string;
    age: number;
    location: string;
};

const Student1: Student = {
    firstname: 'John',
    lastname: 'Salva',
    age: 12,
    location: 'Kenya',
};

const Student2: Student = {
    firstname: 'Josephine',
    lastname: 'Wine',
    age: 21,
    location: 'Uganda',
};

function renderTable(Student) {
    const table = document.createElement('table');
    const headerRow = table.insertRow();
    headerRow.insertCell(0).textContent = 'First Name';
    headerRow.insertCell(1).textContent = 'Last Name';
    headerRow.insertCell(2).textContent = 'Age';
    headerRow.insertCell(3).textContent = 'Location';
  
    students.forEach((student) => {
      const row = table.insertRow();
      row.insertCell(0).textContent = student.firstName;
      row.insertCell(1).textContent = student.lastName;
      row.insertCell(2).textContent = student.age.toString(); // Convert age to string
      row.insertCell(3).textContent = student.location;
    });
  
    document.body.appendChild(table);
  }
