export function CharCount(sentence: string): { [key: string]: number } {
  const resultObj: { [key: string]: number } = {};
  for (let char of sentence.toLowerCase()) {
    const charCode: number = char.charCodeAt(0);
    if ((charCode > 47 && charCode < 58) || (charCode > 96 && charCode < 123)) {
      resultObj[char] = ++resultObj[char] || 1;
    }
  }
  return resultObj;
}
