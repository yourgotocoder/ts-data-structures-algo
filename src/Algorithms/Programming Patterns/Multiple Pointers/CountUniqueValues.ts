export function CountUniqueValue(numArray: number[]): number {
  if (numArray.length === 0) {
    return 0;
  } else {
    let uniqueCount = 1;
    for (
      let firstPointer = 0, secondPointer = 1;
      secondPointer < numArray.length;

    ) {
      if (numArray[firstPointer] === numArray[secondPointer]) {
        ++secondPointer;
      } else {
        firstPointer = secondPointer;
        ++secondPointer;
        uniqueCount++;
      }
    }
    return uniqueCount;
  }
}
