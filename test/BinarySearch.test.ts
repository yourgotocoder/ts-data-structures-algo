import { BinarySearch } from "../src/Algorithms/Searching/BinarySearch";

describe("should return true if a value exists in an array", () => {
  it("BinarySearch([1, 2, 3, 4, 5], 3) will return true", () => {
    expect(BinarySearch([1, 2, 3, 4, 5], 3)).toBeTruthy();
  });
});
