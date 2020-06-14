import getRedirects from '@utils/getRedirects';
import getLinksFromText from '@utils/getLinksFromText';
import removeAnalytics from '@utils/removeAnalytics';
import removeDuplicates from '@utils/removeDuplicates';
import banVendors from '@utils/banVendors';
import removeHash from '@utils/removeHash';
import removeSearch from '@utils/removeSearch';
import removeRootURL from '@utils/removeRootURL';
import removeSponsor from './utils/removeSponsor';
import removeListControls from './utils/removeListControls';

const helpers = [
  removeSponsor,
  getLinksFromText,
  banVendors,
  removeHash,
  removeSearch,
  removeAnalytics,
  removeRootURL,
  removeDuplicates,
  removeListControls,
];

export default async (text) => helpers.reduce(async (text, helper) => {
    const resolved = await text;
    return helper(resolved);
  }, text);
