export default function getStudentsByLocation(getListStudents, city) {
  return getListStudents.filter((x) => x.location === city);
}
