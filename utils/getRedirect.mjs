/**
 * This module request URL and if it will lead to redirect — return url from location.
 * @param {string} source — url from which we need to get redirect
 * @return {string} — if url will lead to redirect then function will return url from location. 
 * Otherwise it will return source unchanged.
 */
export default (async (source) => {
  const url = new URL(source);
  const isHTTPS = url.protocol === "https:";
  const fetch = isHTTPS ? await import('https') : await import('http');
  return new Promise((resolve, reject) => fetch.get(url.href, {
    headers: { 'accept-encoding': 'identity' }
  }, (response) => {
    const isRedirect = (response.statusCode > 300) && (response.statusCode < 400);
    if (!isRedirect) resolve(url.href);
    resolve(response.headers.location);
  }));
});
