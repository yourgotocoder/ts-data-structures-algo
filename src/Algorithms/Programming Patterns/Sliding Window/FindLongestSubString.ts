export function FindLongestSubString(str: string): number {
  let tracker = 0;
  let seen: { [key: string]: number } = {};
  let longestSubString = 0;
  for (let index = 0; index < str.length; index++) {
    const char = str[index];
    if (seen[char]) {
      tracker = Math.max(tracker, seen[char]);
    }
    longestSubString = Math.max(longestSubString, index - tracker + 1);
    seen[char] = index + 1;
  }
  return longestSubString;
}
