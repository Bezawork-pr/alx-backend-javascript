export default function cleanSet(set, startString) {
  if (!startString) {
    return '';
  }
  const newArray = [...set].filter((element) => element.startsWith(startString));
  const startWithLength = startString.length;
  const sliced = newArray.map((element) => element.slice(startWithLength));
  return sliced.join('-');
}
