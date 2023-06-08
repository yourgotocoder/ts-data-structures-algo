export function QuickSort(
  arr: number[],
  left = 0,
  right = arr.length - 1
): number[] {
  if (left < right) {
    let pivotIndex = PivotFinder(arr, left, right);
    QuickSort(arr, left, pivotIndex - 1);
    QuickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

export function PivotFinder(
  arr: number[],
  startIndex: number = 0,
  endIndex: number = arr.length - 1
): number {
  const pivot = arr[startIndex];
  let pivotIndex = startIndex;
  while (startIndex < endIndex) {
    if (arr[startIndex + 1] < pivot) {
      [arr[pivotIndex], arr[startIndex + 1]] = [
        arr[startIndex + 1],
        arr[pivotIndex],
      ];
      pivotIndex++;
    }
    startIndex++;
  }
  arr[pivotIndex] = pivot;
  return pivotIndex;
}

console.log(QuickSort([3, 1, 2, 5, 6, 86776, 34, 3434, 324, 654]));
