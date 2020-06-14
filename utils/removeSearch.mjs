export default (links)=>links.map((link) => {
  const url = new URL(link);
  url.search = "";
  return url.href;
});
