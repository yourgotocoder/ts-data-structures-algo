export function ValidAnagram(str1: string, str2: string): boolean {
  if (str1.length !== str2.length) return false;
  const counter: { [key: string]: number } = {};
  for (let char of str1) {
    counter[char] = ++counter[char] || 1;
  }
  for (let char of str2) {
    if (!counter[char]) return false;
    --counter[char];
  }

  return true;
}
