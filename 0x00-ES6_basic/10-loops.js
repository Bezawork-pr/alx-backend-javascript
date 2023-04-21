export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (const val of array) {
    const value = val;
    newArray.push(appendString + value);
  }

  return newArray;
}
