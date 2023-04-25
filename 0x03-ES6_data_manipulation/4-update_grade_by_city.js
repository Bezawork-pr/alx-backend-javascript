export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  const filteredCityStudents = getListStudents.filter(x => x.location === city);
  newGrades.map((element) => {filteredCityStudents.filter((x) => {if (x.id === element.studentId) {x.grade = element.grade} else {x.grade = "N/A";}})});
  return filteredCityStudents;
} 
