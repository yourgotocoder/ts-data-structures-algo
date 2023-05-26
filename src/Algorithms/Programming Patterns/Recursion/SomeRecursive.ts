export function SomeRecursive(
  arr: any[],
  callback: (value: any) => boolean
): boolean {
  if (arr.length === 0) return false;
  if (callback(arr[0])) return true;
  return SomeRecursive(arr.splice(1), callback);
}
