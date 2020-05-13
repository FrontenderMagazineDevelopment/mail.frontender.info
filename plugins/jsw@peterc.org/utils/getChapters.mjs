import getFromTo from '@utils/getFromTo.mjs';

const parts = [
'JavaScript Weekly', // from 0
// part 1
'Jobs', // to 1
// skipped
'Tutorials', // from 2
// part 2
'Code & Tools', // to 3
];

export default (text) => [
  getFromTo(parts[0], parts[1], text), 
  getFromTo(parts[2], parts[3], text)
].join('\n\n');
