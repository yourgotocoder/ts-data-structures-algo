export function NestedEvenSum(obj: {
  [key: string]: string | number | boolean | object;
}): number {
  let sum = 0;
  for (let key in obj) {
    if (typeof obj[key] === "number" && +obj[key] % 2 === 0) {
      sum += +obj[key];
    } else if (typeof obj[key] === "object") {
      sum += NestedEvenSum(
        obj[key] as { [key: string]: string | number | boolean | object }
      );
    }
  }
  return sum;
}
