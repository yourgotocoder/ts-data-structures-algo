export function CharCount(sentence: string): { [key: string]: number } {
  const resultObj: { [key: string]: number } = {};
  for (let char of sentence.toLowerCase()) {
    if (char === "" || char === " ") continue;
    if (!resultObj[char]) {
      resultObj[char] = 1;
    } else if (resultObj[char]) {
      resultObj[char]++;
    }
  }
  return resultObj;
}
