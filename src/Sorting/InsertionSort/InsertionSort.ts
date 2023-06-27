export function InsertionSort(arr: number[]): number[] {
  for (let index = 1; index < arr.length; index++) {
    let current = arr[index];
    let sortedArrayIndex = index - 1;
    while (sortedArrayIndex >= 0 && arr[sortedArrayIndex] > current) {
      arr[sortedArrayIndex + 1] = arr[sortedArrayIndex];
      sortedArrayIndex--;
    }
    arr[sortedArrayIndex + 1] = current;
  }
  return arr;
}
