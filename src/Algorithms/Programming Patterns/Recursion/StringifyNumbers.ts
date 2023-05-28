type NestedObject = {
  [key: string]: number | string | boolean | object | [];
};
export function StringifyNumbers(obj: NestedObject): NestedObject {
  let newObj: NestedObject = {};
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      newObj[key] = obj[key].toString();
    } else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      newObj[key] = StringifyNumbers(obj[key] as NestedObject);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}
