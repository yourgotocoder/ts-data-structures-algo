import { MinSubArrayLen } from "../src/Algorithms/Programming Patterns/Sliding Window/MinSubArray";

describe(" should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function", () => {
  it("MinSubArrayLen([2, 3, 1, 2, 4, 3], 7) will be 2", () => {
    expect(MinSubArrayLen([2, 3, 1, 2, 4, 3], 7)).toBe(2);
  });
  it("MinSubArrayLen([2, 1 ,6, 5, 4], 9) will be 2", () => {
    expect(MinSubArrayLen([2, 1, 6, 5, 4], 9)).toBe(2);
  });
  it("MinSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) will be 1", () => {
    expect(MinSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)).toBe(1);
  });
  it("MinSubArrayLen([1,4,16,22,5,7,8,9,10], 39) will be 3", () => {
    expect(MinSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)).toBe(3);
  });
  it("MinSubArrayLen([1,4,16,22,5,7,8,9,10], 95) will be 3", () => {
    expect(MinSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)).toBe(0);
  });
});
