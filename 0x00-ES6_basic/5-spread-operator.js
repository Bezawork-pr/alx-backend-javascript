export default function concatArrays(array1, array2, string) {
  let combined = [...array1, ...array2, ...string];
  return combined;
}
