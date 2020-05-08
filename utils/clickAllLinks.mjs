import fetch from 'isomorphic-fetch';
import getLinksFromText from '@utils/getLinksFromText';
import banVendors from '@utils/banVendors';
import removeAnalytics from '@utils/removeAnalytics';
import removeDuplicates from '@utils/removeDuplicates';
import filterUnsubscribeLinks from '@utils/filterUnsubscribeLinks';

const helpers = [
  getLinksFromText,
  banVendors,
  removeAnalytics,
  removeDuplicates,
  filterUnsubscribeLinks,
];

export default async (text) => {
  const links = await helpers.reduce(async (text, helper) => {
    const resolved = await text;
    return helper(resolved);
  }, text);
  return Promise.all(links.map(link => fetch(link)));
}
