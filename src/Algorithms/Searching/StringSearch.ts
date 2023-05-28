export function StringSearch(sentence: string, pattern: string): number {
  let count = 0;
  const windowSize = pattern.length;
  for (let index = 0; index < sentence.length - (pattern.length - 1); index++) {
    console.log(sentence.substring(index, index + windowSize), pattern);
    if (sentence.substring(index, index + windowSize) === pattern) {
      count += 1;
      console.log(true);
    }
  }
  return count;
}

console.log(StringSearch("ia was a method was", "was"));
