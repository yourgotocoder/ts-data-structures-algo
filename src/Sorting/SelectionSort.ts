export function SelectionSort(arr: number[]): number[] {
  const swap = (index1: number, index2: number) =>
    ([arr[index1], arr[index2]] = [arr[index2], arr[index1]]);

  for (let slowPointer = 0; slowPointer < arr.length; slowPointer++) {
    let indexOfMin = slowPointer;
    for (
      let fastPointer = slowPointer + 1;
      fastPointer < arr.length;
      fastPointer++
    ) {
      if (arr[indexOfMin] > arr[fastPointer]) {
        indexOfMin = fastPointer;
      }
    }
    indexOfMin != slowPointer && swap(indexOfMin, slowPointer);
  }
  return arr;
}
