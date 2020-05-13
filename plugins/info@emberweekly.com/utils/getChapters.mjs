import getFromTo from '@utils/getFromTo.mjs';

const parts = [
'Headlines', // from 0
// skipped
'Watch/Listen', // to 1
// skipped
'Code', // from 2
// skipped
'Reading', // to 3
// part 1
'Contact', // to 4
];

export default (text) => [
  getFromTo(parts[3], parts[4], text),
].join('\n\n');
