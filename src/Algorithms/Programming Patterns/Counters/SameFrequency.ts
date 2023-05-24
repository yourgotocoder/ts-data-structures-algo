export function SameFrequency(n1: number, n2: number): boolean {
  const counter: { [key: number]: number } = {};
  for (let value of n1.toString()) {
    counter[+value] = ++counter[+value] || 1;
  }
  for (let value of n2.toString()) {
    if (!counter[+value]) return false;
    counter[+value] = --counter[+value];
  }
  return true;
}
