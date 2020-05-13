import getRedirects from '@utils/getRedirects';
import getLinksFromText from '@utils/getLinksFromText';
import filterVendorLinks from '@utils/filterVendorLinks';
import banVendors from '@utils/banVendors';
import removeAnalytics from '@utils/removeAnalytics';
import removeDuplicates from '@utils/removeDuplicates';
import getChapters from './utils/getChapters';

const vendor = 'css-weekly';

const helpers = [
  getChapters,
  getLinksFromText,
  getRedirects,
  filterVendorLinks(vendor),
  banVendors,
  removeAnalytics,
  removeDuplicates,
];

export default async (text) => helpers.reduce(async (text, helper) => {
    const resolved = await text;
    return helper(resolved);
  }, text);
