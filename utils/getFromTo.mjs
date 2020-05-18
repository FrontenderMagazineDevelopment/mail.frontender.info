export default (from, to, text) => {
  const lowerCaseText = text.toLowerCase();
  const lowerCaseFrom = from.toLowerCase();
  const lowerCaseTo = to.toLowerCase();
  const fromIndex = lowerCaseText.indexOf(lowerCaseFrom);
  const toIndex = lowerCaseText.indexOf(lowerCaseTo);
  const length = toIndex - fromIndex;
  return text.substr(fromIndex, length);
}
