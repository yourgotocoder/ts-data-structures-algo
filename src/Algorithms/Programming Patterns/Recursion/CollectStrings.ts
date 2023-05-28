type NestedObject = {
  [key: string]: string | object;
};
export function CollectStrings(obj: NestedObject): string[] {
  let strArray: string[] = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") {
      strArray.push(obj[key] as string);
    } else if (typeof obj[key] === "object") {
      strArray.push(...CollectStrings(obj[key] as NestedObject));
    }
  }
  return strArray;
}
