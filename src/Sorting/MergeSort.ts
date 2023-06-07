export function merge(arr1: number[], arr2: number[]): number[] {
  const newArray: number[] = new Array(arr1.length + arr2.length);
  let indexOfArr1: number = 0;
  let indexOfArr2: number = 0;
  let indexOfNewArray: number = 0;
  while (indexOfNewArray < newArray.length) {
    if (indexOfArr1 < arr1.length && indexOfArr2 < arr2.length) {
      if (arr1[indexOfArr1] > arr2[indexOfArr2]) {
        newArray[indexOfNewArray] = arr2[indexOfArr2];
        indexOfArr2++;
      } else if (arr1[indexOfArr1] < arr2[indexOfArr2]) {
        newArray[indexOfNewArray] = arr1[indexOfArr1];
        indexOfArr1++;
      } else {
        newArray[indexOfNewArray] = arr1[indexOfArr1];
        indexOfArr1++;
      }
    } else if (indexOfArr1 >= arr1.length && indexOfArr2 < arr2.length) {
      newArray[indexOfNewArray] = arr2[indexOfArr2];
      indexOfArr2++;
    } else {
      newArray[indexOfNewArray] = arr1[indexOfArr1];
      indexOfArr1++;
    }
    indexOfNewArray++;
  }
  return newArray;
}

console.log(merge([1, 2, 3], [4, 5, 6, 7]));
