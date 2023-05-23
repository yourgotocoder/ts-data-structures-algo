import { CompareArrays } from "../src/Algorithms/Programming Patterns/Counters/CompareArrays";

describe("should compare two arrays and return true when the second array has values that are the square of the first array", () => {
  it("CompareArrays([1, 2, 3], [1, 4, 9]) should return true", () => {
    expect(CompareArrays([1, 2, 3], [1, 4, 9])).toBe(true);
  })
  it("CompareArrays([1, 2, 3], [1, 4, 3]) should return false", () => {
    expect(CompareArrays([1, 2, 3], [1, 4, 3])).toBe(false);
  })
  it("CompareArrays([1, 2, 1], [1, 4, 4]) should return false", () => {
    expect(CompareArrays([1, 2, 1], [1, 4, 4])).toBe(false);
  })
  it("CompareArrays([1, 2, 1], [1, 1, 4]) should return false", () => {
    expect(CompareArrays([1, 2, 1], [1, 1, 4])).toBe(true);
  })
})
