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

console.log(merge([1, 2, 3], [3, 5, 6]));
