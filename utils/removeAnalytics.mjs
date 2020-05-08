const analyticsParams = ['utm_source', 'utm_campaign', 'utm_medium'];

export default (links)=>links.map((link) => {
  const url = new URL(link);
  analyticsParams.forEach(param => url.searchParams.delete(param));
  return url.href;
});



