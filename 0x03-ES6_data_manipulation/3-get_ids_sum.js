export default function getStudentIdsSum(getListStudents) {
 const accumulateValue = getListStudents.reduce((accumulator, each) => accumulator + each.id, 0);
  return accumulateValue;
}
