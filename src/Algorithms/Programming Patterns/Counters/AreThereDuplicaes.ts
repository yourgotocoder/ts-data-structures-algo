export function AreThereDuplicates(...args: (number | string)[]): boolean {
  const counter: { [key: string | number]: number } = {};
  for (let value of args) {
    if (counter[value]) return true;
    counter[value] = 1;
  }
  return false;
}
