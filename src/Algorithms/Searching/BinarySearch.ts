export function BinarySearch(
  arr: number[],
  value: number,
  left: number = 0,
  right: number = arr.length - 1
): boolean {
  if (left <= right) {
    const middle = Math.floor((left + right) / 2);
    if (arr[middle] === value) return true;
    return arr[middle] > value
      ? BinarySearch(arr, left, middle - 1, value)
      : BinarySearch(arr, middle + 1, right, value);
  }
  return false;
}
