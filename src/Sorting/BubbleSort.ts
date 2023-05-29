export function BubbleSort(arr: number[]): number[] {
  const swap = (index1: number, index2: number) => {
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
  };
  for (let outerIndex = arr.length - 1; outerIndex > 0; outerIndex--) {
    for (let innerIndex = 0; innerIndex < outerIndex; innerIndex++) {
      arr[innerIndex] > arr[innerIndex + 1] && swap(innerIndex, innerIndex + 1);
    }
  }
  return arr;
}
