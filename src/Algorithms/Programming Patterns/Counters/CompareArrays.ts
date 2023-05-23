export function CompareArrays(arr1: number[], arr2: number[]): boolean {
  if (arr1.length !== arr2.length) return false;
  const counter: { [key: number]: number } = {};
  for (let value of arr2) {
    counter[value] = ++counter[value] || 1;
  };
  for (let value of arr1) {
    if (!counter[value * value]) return false;
    --counter[value * value]
  };
  for (let key in counter) {
    if (counter[key] !== 0) return false;
  }
  return true;
}
