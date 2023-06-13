console.log = process.stdout.write('Welcome to Holberton School, what is your name?');
process.stdin.setEncoding('utf8')
process.argv.forEach(function(val, index, array) {
  console.log = val
});
