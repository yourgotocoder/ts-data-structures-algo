export function BinarySearch(array: number[], value: number): boolean {
  let left = 0;
  let right = array.length - 1;
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (array[middle] === value) return true;
    array[middle] < value ? (left = middle + 1) : (right = middle - 1);
  }
  return false;
}
