/**
 * Returns urls array splited to chunks accordin to cors number
 *
 * @param urls {String[]} — URLs array
 * @param cors {Number} — count of available cors
 * @return {Array} — URLs array splited to chunks
 */
export default (urls, cors) => {
  const chunks = [...Array(cors)].map(() => []);
  let index = 0;
  urls.forEach((url) => {
    if (index > (chunks.length - 1)) {
      index = 0;
    }
    chunks[index].push(url);
    index += 1;
  });
  return chunks;
};
