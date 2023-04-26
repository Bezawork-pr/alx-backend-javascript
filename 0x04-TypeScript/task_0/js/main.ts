

interface Student{
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
const student1: Student = {
  firstName: "Mebratu",
  lastName: "Lina",
  age: 25,
  location: "Addis Ababa",
}
const student2: Student = {
  firstName: "Denberu",
  lastName: "Alemneh",
  age: 20,
  location: "Addis Ababa",
 }
const studentsList: Array <Student> =  [student1, student2];
const table: HTMLTableElement = document.createElement('table');
document.body.appendChild(table);
table.style.width = '600px';
table.style.border = '1px solid black';

studentsList.map((student) => {
  const tr: HTMLTableRowElement = table.insertRow();
  const firstName: HTMLTableCellElement = tr.insertCell();
  const location: HTMLTableCellElement = tr.insertCell();
  firstName.innerHTML = student.firstName;
  location.innerHTML = student.location;
})
    
