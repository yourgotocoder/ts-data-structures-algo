export function LinearSearch(numberList: number[], searchNumber: number): boolean {
  for (let index = 0; index < numberList.length; index++) {
    if (numberList[index] === searchNumber) return true;
  }
  return false;
}
