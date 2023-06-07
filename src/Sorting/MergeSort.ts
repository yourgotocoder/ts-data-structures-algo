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

export function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;
  let middle = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, middle));
  let right = mergeSort(arr.slice(middle));
  return merge(left, right);
}
