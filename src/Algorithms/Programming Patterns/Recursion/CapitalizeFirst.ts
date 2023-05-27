export function CapitalizeFirst(arr: string[]): string[] {
  if (arr.length === 0) return [];
  const capitalizedWord: string =
    arr[0].length > 1
      ? arr[0][0].toUpperCase() + arr[0].slice(1)
      : arr[0].toUpperCase();
  return [capitalizedWord].concat(CapitalizeFirst(arr.slice(1)));
}
