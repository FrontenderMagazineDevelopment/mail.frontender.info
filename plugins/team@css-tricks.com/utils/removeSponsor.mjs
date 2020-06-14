export default text => {
  const from = text.indexOf(text.match(/[\n]+[\-]{3,}[\n]+[^-]*Sponsor/ig)[0]);
  const cutted = text.substr(from).split(/[-]{3,}/).slice(3).join('');
  return `${text.slice(0,from)}${cutted}`;
}
