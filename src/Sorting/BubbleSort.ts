export function BubbleSort(arr: number[]): number[] {
  const swap = (index1: number, index2: number) => {
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
  };
  let noSwaps = true;
  for (let slowPointer = arr.length - 1; slowPointer > 0; slowPointer--) {
    noSwaps = true;
    for (let fastPointer = 0; fastPointer < slowPointer; fastPointer++) {
      if (arr[fastPointer] > arr[fastPointer + 1]) {
        swap(fastPointer, fastPointer + 1);
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

// [ 28,  18, 20, 3,45, 49]
