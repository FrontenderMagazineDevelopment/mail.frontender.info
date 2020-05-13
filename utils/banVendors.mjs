import filterVendorLinks from './filterVendorLinks.mjs';
const bannedVendors = ['twitter.com','codepen.io','facebook.com','smashingconf.com','github.com','youtube.com'];
export default (links) => bannedVendors.reduce((links, vendor) =>  filterVendorLinks(vendor)(links), links);
