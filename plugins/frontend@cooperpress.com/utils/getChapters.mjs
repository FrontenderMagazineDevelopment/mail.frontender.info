import getFromTo from '../../../utils/getFromTo.mjs';

const parts = [
'Frontend Focus', // from 0
// part 1
'Jobs', // to 1
// skipped
'News, Tutorials & Opinion', // from 2
// part 2
'Code, Tools and Resources', // to 3
// skipped
'Web Font of the Week',
];

export default (text) => [
  getFromTo(parts[0], parts[1], text), 
  getFromTo(parts[2], parts[3], text)
].join('\n\n');
