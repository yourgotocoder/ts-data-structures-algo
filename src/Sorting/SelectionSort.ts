export function SelectionSort(arr: number[]): number[] {
  const swap = (index1: number, index2: number) =>
    ([arr[index1], arr[index2]] = [arr[index2], arr[index1]]);
  for (let outer = 0; outer < arr.length; outer++) {
    let min = outer;
    for (let inner = outer + 1; inner < arr.length; inner++) {
      if (arr[min] > arr[inner]) {
        min = inner;
      }
    }
    outer != min && swap(outer, min);
  }
  return arr;
}