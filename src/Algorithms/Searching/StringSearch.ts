export function StringSearch(sentence: string, pattern: string): number {
  let count = 0;
  const windowSize = pattern.length;
  for (let index = 0; index < sentence.length - (pattern.length - 1); index++) {
    if (sentence.substring(index, index + windowSize) === pattern) {
      count += 1;
    }
  }
  return count;
}
