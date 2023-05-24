import { SameFrequency } from "../src/Algorithms/Programming Patterns/Counters/SameFrequency";

describe("should return true if two positive integers have the same frequency of digits", () => {
  it("SameFrequency(182, 281) will return true", () => {
    expect(SameFrequency(182, 281)).toBeTruthy();
  });
  it("SameFrequency(34, 14) will return false", () => {
    expect(SameFrequency(34, 14)).toBeFalsy();
  });
});
