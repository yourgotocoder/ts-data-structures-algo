export function QuickSort() {}

export function PivotFinder(
  arr: number[],
  startIndex: number = 0,
  endIndex: number = arr.length - 1
): number {
  const current = arr[0];
  let pivotIndex = 0;
  while (startIndex < endIndex) {
    if (arr[startIndex + 1] < current) {
      [arr[pivotIndex], arr[startIndex + 1]] = [
        arr[startIndex + 1],
        arr[pivotIndex],
      ];
      pivotIndex++;
    }
    startIndex++;
  }
  arr[pivotIndex] = current;
  return pivotIndex;
}
console.log(PivotFinder([5, 3, 2, 1, 6, 7, 8]));
