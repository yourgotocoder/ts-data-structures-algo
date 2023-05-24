import { MaxSubArraySum } from "../src/Algorithms/Programming Patterns/Sliding Window/MaxSubArraySum";

describe("should calculate the max sum of n consecutive numbers in an array", () => {
  it("MaxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2) will return 10", () => {
    expect(MaxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2)).toBe(10);
  });
  it("MaxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4) will return 17", () => {
    expect(MaxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4)).toBe(17);
  });
  it("MaxSubArraySum([], 4) will return 17", () => {
    expect(MaxSubArraySum([], 4)).toBeNull();
  });
});
