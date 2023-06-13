/* eslint-disable */
const express = require('express');
const fs = require('fs');
const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
})
app.get('/students', (req, res) => {
  const retrived =  fs.readFileSync(process.argv[2], 'utf8');
  const data = retrived.split('\n');
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
  res.send(`Number of students: ${data.length}\nNumber of students in CS: ${cs}. List: ${csList.join(', ')}\nNumber of students in SWE: ${swe}. List: ${sweList.join(', ')}`);
})
app.listen(port);
module.exports = app;
