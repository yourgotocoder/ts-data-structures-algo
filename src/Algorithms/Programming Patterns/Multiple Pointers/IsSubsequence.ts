export function IsSubsequence(str1: string, str2: string): boolean {
  if (!str1) return true;

  let firstStringPointer = 0;
  let secondStringPointer = 0;

  while (secondStringPointer < str2.length) {
    if (str1[firstStringPointer] === str2[secondStringPointer]) {
      firstStringPointer++;
    }
    if (firstStringPointer === str1.length) return true;
    ++secondStringPointer;
  }
  return false;
}
