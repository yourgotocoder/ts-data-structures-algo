export function MinSubArrayLen(arr: number[], value: number): number {
  let slowPointer = 0;
  let fastPointer = 0;
  let minLength = Infinity;
  let temp = 0;
  while (slowPointer < arr.length) {
    if (temp < value && fastPointer < arr.length) {
      temp += arr[fastPointer];
      ++fastPointer;
    } else if (temp >= value) {
      minLength = Math.min(minLength, fastPointer - slowPointer);
      temp -= arr[slowPointer];
      slowPointer++;
    } else {
      break;
    }
  }
  return minLength === Infinity ? 0 : minLength;
}
