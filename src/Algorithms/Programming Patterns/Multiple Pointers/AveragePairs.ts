export function AveragePairs(arr: number[], avg: number): boolean {
  if (arr.length === 0) return false;
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const average = +((arr[left] + arr[right]) / 2).toFixed(1);
    if (average === avg) return true;
    average > avg ? --right : ++left;
  }
  return false;
}
