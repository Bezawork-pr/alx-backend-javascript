const fs = require('fs');

module.exports = function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8').split('\n');
    const myList = [];
    let cs = 0;
    let swe = 0;
    const csList = [];
    const sweList = [];
    data.shift();
    data.pop();
    console.log(`Number of students: ${data.length}`);
    for (let i = 0; i < data.length; i + 1) {
      const details = data[i].split(',');
      const myDict = {};
      const {
        firstname, lastname, age, field,
      } = details;
      myDict.firstname = firstname;
      myDict.lastname = lastname;
      myDict.age = age;
      myDict.field = field;
      if (myDict.field === 'CS') {
        cs += 1;
        csList.push(myDict.firstname);
      } else {
        swe += 1;
        sweList.push(myDict.firstname);
      }
      myList.push(myDict);
    }
    console.log(`Number of students in CS: ${cs}. List: ${csList.join(', ')}`);
    console.log(`Number of students in SWE: ${swe}. List: ${sweList.join(', ')}`);
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};
