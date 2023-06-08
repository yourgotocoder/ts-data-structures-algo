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

console.log(digitCount(1000));
