export function RadixSort() {}

function getDigit(num: number, place: number): number {
  let numString = `${num}`;
  let characterAt = numString.at(-1 - place);
  if (characterAt !== undefined) {
    return +characterAt;
  }
  return 0;
}

console.log(getDigit(456, 3));
