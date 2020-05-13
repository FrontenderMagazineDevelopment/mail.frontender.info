import getFromTo from '@utils/getFromTo.mjs';

const parts = [
'view online version', // from 1
// part 1
'From Our Sponsor', // to 1
// skipped
'Articles & Tutorials', // from 2
// part 2
'Promoted Link', // to 2
// skipped
'Tools',
// skipped
'Inspiration',
// skipped
'Until Next Week'
];

export default (text) => [
  getFromTo(parts[0], parts[1], text), 
  getFromTo(parts[2], parts[3], text)
].join('\n\n');
