import getRedirect from './getRedirect.mjs';
export default (links)=>Promise.all(links.map((link) => getRedirect(link)));
