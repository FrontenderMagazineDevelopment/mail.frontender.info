export default (links)=>links.map((link) => {
  const url = new URL(link);
  url.hash = "";
  return url.href;
});
