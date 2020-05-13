import getFromTo from '../../../utils/getFromTo.mjs';

const parts = [
'Articles:', // from 0
// skipped
'Jobs:', // to 1
// skipped
'Tutorials:', // from 2
// part 1
'Competitions:', // to 3
// skipped
'Tools:',
// skipped
'Demos:',
// skipped
'Games:'
];

export default (text) => [
  getFromTo(parts[2], parts[3], text)
].join('\n\n');
