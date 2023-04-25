export default function getListStudentIds(getListStudents) {
  if (Array.isArray(getListStudents) === true) {
    const newArray = [];

    getListStudents.map((x) => newArray.push(x.id));
    return newArray;
  }
  return [];
}
