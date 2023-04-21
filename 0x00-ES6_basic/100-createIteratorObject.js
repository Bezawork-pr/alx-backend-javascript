export default function createIteratorObject(report) {
  const keys = [];
  const employees = [];
  for (const department of Object.values(report.allEmployees)) {
    keys.push(department);
  }
  for (const dep of keys) {
    for (const emp of dep) {
      employees.push(emp);
    }
  }

  return employees;
}
