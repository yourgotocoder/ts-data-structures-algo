import { SumZero } from "../src/Algorithms/Programming Patterns/Multiple Pointers/SumZero";

describe("should return the first pair of numbers in an array that will sum to zero or return undefined if such a pair doesn't exist", () => {
  it("SumZero([-3, -2, -1, 0, 1, 2, 3]) will return [-3, 3]", () => {
    expect(SumZero([-3, -2, -1, 0, 1, 2, 3])).toStrictEqual([-3, 3]);
  });
  it("SumZero([0, 1, 2, 3]) will return undefined", () => {
    expect(SumZero([0, 1, 2, 3])).toBeUndefined();
  });
  it("SumZero([-2, -1, 0, 1, 2, 3]) will return [-2, 2]", () => {
    expect(SumZero([-2, -1, 0, 1, 2, 3])).toStrictEqual([-2, 2]);
  });
  it("SumZero([-2, -1, 0, 1, 3]) will return [-1, 1]", () => {
    expect(SumZero([-2, -1, 0, 1, 3])).toStrictEqual([-1, 1]);
  });
});
