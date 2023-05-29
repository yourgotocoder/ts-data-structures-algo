export function BubbleSort(arr: number[]): number[] {
  const swap = (index1: number, index2: number) => {
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
  };
  let noSwaps = true;
  let numberOfComparisions = 0;
  for (let outerIndex = arr.length - 1; outerIndex > 0; outerIndex--) {
    noSwaps = true;
    for (let innerIndex = 0; innerIndex < outerIndex; innerIndex++) {
      if (arr[innerIndex] > arr[innerIndex + 1]) {
        swap(innerIndex, innerIndex + 1);
        noSwaps = false;
      }
      ++numberOfComparisions;
    }
    if (noSwaps) break;
  }
  console.log(numberOfComparisions);
  return arr;
}

// [ 28,  18, 20, 3,45, 49]
