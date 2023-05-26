export function Flatten<T>(arr: T[]): T[] {
  return arr.reduce((flattenedArray: T[], currentValue: T) => {
    if (Array.isArray(currentValue)) {
      flattenedArray.push(...Flatten(currentValue));
    } else {
      flattenedArray.push(currentValue);
    }
    return flattenedArray;
  }, []);
}
