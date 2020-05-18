import getFromTo from '@utils/getFromTo.mjs';

// Look like some chapters could be skipped
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

const findChapter = (name, chapters) => {
  const startWith = new RegExp(`^[\\s]*${name}`,'im');
  return chapters.find((chapter) => (chapter.match(startWith) !== null));
};

export default (text) => {
  const chapters = text.split('**');
  const res = findChapter('Tutorials:', chapters);
  return res;
}
