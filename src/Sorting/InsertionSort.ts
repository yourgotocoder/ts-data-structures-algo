export function InsertionSort(arr: number[]): number[] {
  let sortedArray = new Array<number>(arr.length);
  sortedArray[0] = arr[0];
  console.log(sortedArray);
  return arr;
}
console.log(InsertionSort([1, 2, 3, 4, 5]));
