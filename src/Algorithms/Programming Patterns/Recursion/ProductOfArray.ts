export function ProductOfArray(arr: number[]): number {
  if (arr.length === 0) return 1;
  return arr[0] * ProductOfArray(arr.splice(1));
}
