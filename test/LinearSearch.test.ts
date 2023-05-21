import { LinearSearch } from "../src/Algorithms/Searching/LinearSearch";

describe("test add function", () => {
  it("should return true for LinearSearch([2, 3, 4, 4, 5], 5)", () => {
    expect(LinearSearch([2, 3, 4, 4, 5], 5)).toBe(true);
  });
  it("should return false for LinearSearch([0, 1, 2, 4, 5], 3)", () => {
    expect(LinearSearch([0, 1, 2, 4, 5], 3)).toBe(false);
  });
});
