import getFromTo from '@utils/getFromTo.mjs';

const parts = [
'ARTICLES', // from 0
// part 1
'SPONSORED LINKS', // to 1
// skipped
'TUTORIALS', // from 2
// part 2
'RESOURCES', // to 3
// skipped
'PROJECTS',
// skipped
'VIDEOS',
];

export default (text) => [
  getFromTo(parts[0], parts[1], text), 
  getFromTo(parts[2], parts[3], text)
].join('\n\n');
