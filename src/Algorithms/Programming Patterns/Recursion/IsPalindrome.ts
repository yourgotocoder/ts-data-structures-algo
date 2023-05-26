export function IsPalindrome(str: string): boolean {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str.charAt(0) === str.charAt(str.length - 1)) {
    return IsPalindrome(str.slice(1, -1));
  }
  return false;
}
