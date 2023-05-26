import { SumRange } from "../src/Algorithms/Programming Patterns/Recursion/SumRange";

describe("It should test the sum to n function", () => {
  it("should return 15 for SumToNIterative(5)", () => {
    expect(SumRange(5)).toBe(15);
  });
  it("should return 15 for SumToNMathematical(5)", () => {
    expect(SumRange(5)).toBe(15);
  });
});
