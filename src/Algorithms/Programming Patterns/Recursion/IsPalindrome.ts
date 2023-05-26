export function IsPalindrome(str: string): boolean {
  const reverse = (stringToReverse: string): string => {
    if (stringToReverse.length === 1) return stringToReverse;
    return (
      stringToReverse.charAt(stringToReverse.length - 1) +
      reverse(stringToReverse.substring(0, stringToReverse.length - 1))
    );
  };
  const reversedString = reverse(str);
  return str === reversedString ? true : false;
}
