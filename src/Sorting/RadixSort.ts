export function RadixSort(numArray: number[]): number[] {
  const maxDigits = mostDigits(numArray);
  for (let index = 0; index < maxDigits; index++) {
    let bucket: { [key: number]: number[] } = {
      0: [],
      1: [],
      2: [],
      3: [],
      4: [],
      5: [],
      6: [],
      7: [],
      8: [],
      9: [],
    };
    for (let num of numArray) {
      const digit = getDigit(num, index);
      bucket[digit].push(num);
    }
    numArray = [];
    for (let key in bucket) {
      numArray.push(...bucket[key]);
    }
  }
  return numArray;
}

function getDigit(num: number, place: number): number {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function digitCount(num: number): number {
  let digits = 1;
  while (Math.floor(Math.abs(num) / Math.pow(10, digits)) !== 0) {
    digits++;
  }
  return digits;
}

function mostDigits(numArr: number[]): number {
  let maxDigits = numArr.reduce(
    (prevValue: number, currentValue: number) =>
      Math.max(prevValue, digitCount(currentValue)),
    0
  );
  return maxDigits;
}

console.log(RadixSort([23, 123, 12, 123213, 11555, 47457]));
