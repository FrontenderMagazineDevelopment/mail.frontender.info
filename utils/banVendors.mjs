import filterVendorLinks from './filterVendorLinks.mjs';
const bannedVendors = ['twitter.com','codepen.io','facebook.com','bit.ly'];
export default (links) => bannedVendors.reduce((links, vendor) =>  filterVendorLinks(vendor)(links), links);
