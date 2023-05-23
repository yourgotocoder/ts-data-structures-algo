export function SumZero(numArray: number[]): [number, number] | undefined {
  for (
    let forwardPointer = 0, backwardPointer = numArray.length - 1;
    forwardPointer !== backwardPointer;

  ) {
    const sum: number = numArray[forwardPointer] + numArray[backwardPointer];
    if (sum === 0) return [numArray[forwardPointer], numArray[backwardPointer]];
    sum > 0 ? --backwardPointer : ++forwardPointer;
  }
  return undefined;
}
