export default (vendor)=>(links)=>links.filter((link) => {
  const url = new URL(link);
  return !url.hostname.includes(vendor);
});
