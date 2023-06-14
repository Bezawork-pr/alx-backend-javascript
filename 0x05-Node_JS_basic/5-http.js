/* eslint-disable */
const http = require('http');
const fs = require('fs');
const fileReader = function countStudents(path, res) {
  //try {
    const data = fs.readFileSync(path, 'utf8').split('\n');
    const myList = [];
    let cs = 0;
    let swe = 0;
    const csList = [];
    const sweList = [];
    data.shift();
    data.pop();
    for (let i = 0; i < data.length; i = i + 1) {
      const details = data[i].split(',');
      const myDict = {};
      let firstname, lastname, age, field;
      [
        firstname, lastname, age, field,
      ] = details;
      myDict.firstname= firstname;
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
    res.end(`Number of students: ${data.length}\nNumber of students in CS: ${cs}. List: ${csList.join(', ')}\nNumber of students in SWE: ${swe}. List: ${sweList.join(', ')}`);
  //} catch (error) {
  //  throw new Error('Cannot load the database');
  //}
};

const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  let resp = '';
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') { res.end('Hello Holberton School!') };
  if (req.url === "/students") {
    resp = fileReader(process.argv[2], res);
  }
  res.end();
});

app.listen(port, hostname);
module.exports = app;
