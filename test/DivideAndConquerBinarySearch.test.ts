import { BinarySearch } from "../src/Algorithms/Programming Patterns/Divide and Conquer/BinarySearch";

describe("should return true or false if a value exists in a sorted array", () => {
  it("BinarySearch([0, 1, 2, 3, 4, 5, 6, 7], 5) will be true", () => {
    expect(BinarySearch([0, 1, 2, 3, 4, 5, 6, 7], 5)).toBeTruthy();
  });
});
