export function CapitalizeWords(arr: string[]): string[] {
  if (arr.length === 0) return [];
  const capitalizedWord = arr[0].toUpperCase();
  console.log(capitalizedWord);
  const arrayWithFirstWordRemoved = arr.slice(1);
  return [capitalizedWord].concat(CapitalizeWords(arrayWithFirstWordRemoved));
}
