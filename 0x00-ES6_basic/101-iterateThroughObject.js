export default function iterateThroughObject(reportWithIterator) {
  let text = '';
  for (const index in reportWithIterator) {
    if (index === 0) {
      text += reportWithIterator[index];
    } else {
      text += ` | ${reportWithIterator[index]}`;
    }
  }
  return text;
}
