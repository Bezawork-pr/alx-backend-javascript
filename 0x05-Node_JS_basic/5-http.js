/* eslint-disable */
const http = require('http');
const fileReader = require('./2-read_file');

const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  let resp = '';
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') { res.end('Hello Holberton School!') };
  if (req.url === "/students") {
    resp = fileReader(process.argv[2]);
  }
  if (resp !== '') {
    res.end(`${resp}`);
  }
  res.end();
});

app.listen(port, hostname);
module.exports = app;
