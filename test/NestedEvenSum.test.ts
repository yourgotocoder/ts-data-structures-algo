import { NestedEvenSum } from "../src/Algorithms/Programming Patterns/Recursion/NestedEvenSum";

describe("should return the sum of all even numbers in a nested object", () => {
  it("NestedEvenSum(obj1) will return 6", () => {
    const obj1 = {
      outer: 2,
      obj: {
        inner: 2,
        otherObj: {
          superInner: 2,
          notANumber: true,
          alsoNotANumber: "yup",
        },
      },
    };
    expect(NestedEvenSum(obj1)).toBe(6);
  });
});
