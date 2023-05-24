import { AveragePairs } from "../src/Algorithms/Programming Patterns/Multiple Pointers/AveragePairs";

describe("determine if a pair of value exists in a sorted array that has average equal to the passed value", () => {
  it("AveragePairs([1, 2, 3], 2.5) will return true", () => {
    expect(AveragePairs([1, 2, 3], 2.5)).toBeTruthy();
  });
  it("AveragePairs([1,3,3,5,6,7,10,12,19], 8) will return true", () => {
    expect(AveragePairs([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)).toBeTruthy();
  });
  it("AveragePairs([-1, 0, 3, 4, 5, 6], 4.1) will return false", () => {
    expect(AveragePairs([-1, 0, 3, 4, 5, 6], 4.1)).toBeFalsy();
  });
  it("AveragePairs([], 4.1) will return false", () => {
    expect(AveragePairs([], 4.1)).toBeFalsy();
  });
});
