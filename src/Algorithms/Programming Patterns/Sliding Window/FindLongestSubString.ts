export function FindLongestSubString(str: string): number {
  let start = 0;
  let seen: { [key: string]: number } = {};
  let longestSubString = 0;
  for (let tracker = 0; tracker < str.length; tracker++) {
    const char = str[tracker];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    longestSubString = Math.max(longestSubString, tracker - start + 1);
    seen[char] = tracker + 1;
  }
  return longestSubString;
}
