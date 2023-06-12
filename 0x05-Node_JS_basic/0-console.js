module.exports = function displayMessage(param) {
  const paramAndNewLine = param.concat('\n');
  process.stdout.write(paramAndNewLine);
};
