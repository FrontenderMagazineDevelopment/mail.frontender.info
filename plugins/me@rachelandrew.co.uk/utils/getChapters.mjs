import getFromTo from '@utils/getFromTo.mjs';

const parts = [
'Learn', // from 0
// part 1
'Interesting', // to 1
// skipped
'Our Sponsor', // from 2
];

export default (text) => [
  getFromTo(parts[0], "##", text)
].join('\n\n');
