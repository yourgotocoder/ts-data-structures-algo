type NestedObject = {
  [key: string]: number | string | boolean | object;
};
export function StringifyNumbers(obj: NestedObject): NestedObject {
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] = obj[key].toString();
    } else if (typeof obj[key] === "object") {
      StringifyNumbers(obj[key] as NestedObject);
    }
  }
  return obj;
}
