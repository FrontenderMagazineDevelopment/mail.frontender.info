export default (links)=>links.filter((link) => {
  const url = new URL(link);
  return url.pathname !== "/";
});
