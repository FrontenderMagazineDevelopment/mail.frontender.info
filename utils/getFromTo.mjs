export default (from, to, text) => {
  const fromIndex = text.indexOf(from);
  const toIndex = text.indexOf(to);
  const length = toIndex - fromIndex;
  return text.substr(fromIndex, length);
}
