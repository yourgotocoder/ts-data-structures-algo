export function merge(arr1: number[], arr2: number[]): number[] {
  const newArray: number[] = [];
  let indexOfArr1: number = 0;
  let indexOfArr2: number = 0;
  while (indexOfArr1 < arr1.length && indexOfArr2 < arr2.length) {
    if (arr1[indexOfArr1] <= arr2[indexOfArr2]) {
      newArray.push(arr1[indexOfArr1]);
      indexOfArr1++;
    } else {
      newArray.push(arr2[indexOfArr2]);
      indexOfArr2++;
    }
  }
  while (indexOfArr1 < arr1.length) {
    newArray.push(arr1[indexOfArr1]);
    indexOfArr1++;
  }
  while (indexOfArr2 < arr2.length) {
    newArray.push(arr2[indexOfArr2]);
    indexOfArr2++;
  }

  return newArray;
}
/**
 * Takes an unsorted array of numbers and returns a sorted array using merge sort technique
 * For example: MergeSort([4, 8, 1, 3, 6]) will return [1, 3, 4, 6, 8]
 * @param arr - An array of of unsorted numbers
 */
export function MergeSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;
  let middle = Math.floor(arr.length / 2);
  let left = MergeSort(arr.slice(0, middle));
  let right = MergeSort(arr.slice(middle));
  return merge(left, right);
}
