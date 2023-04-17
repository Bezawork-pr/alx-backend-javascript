export default function appendToEachArrayValue(array, appendString) {
  let newArray = [];
  for (const val of array) {
    let value = val;
    newArray.push(appendString + value);
  }

  return newArray;
}
