import { SomeRecursive } from "../src/Algorithms/Programming Patterns/Recursion/SomeRecursive";

describe("should take an array and a callback function and return a true if any of the elements in the array satisfies the callback function", () => {
  it("SomeRecursive([1, 2, 3, 4, 5], isEven)", () => {
    const isEven = (value: number) => value % 2 === 0;
    expect(SomeRecursive([1, 2, 3, 4, 5], isEven)).toBeTruthy();
  });
  it("SomeRecursive([1, 3, 5], isEven)", () => {
    const isEven = (value: number) => value % 2 === 0;
    expect(SomeRecursive([1, 3, 5], isEven)).toBeFalsy();
  });
});
