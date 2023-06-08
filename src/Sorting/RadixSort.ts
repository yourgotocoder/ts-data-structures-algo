export function RadixSort() {}

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
  let maxDigits = 0;
  for (let num of numArr) {
    if (digitCount(num) > maxDigits) maxDigits = digitCount(num);
  }
  return maxDigits;
}
console.log(mostDigits([32, 123, 2, 3234, 23245, 123125]));
