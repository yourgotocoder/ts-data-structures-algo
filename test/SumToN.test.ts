import { SumToNIterative, SumToNMathematical } from "../src/Algorithms/Basic Problems/SumToN";

describe("It should test the sum to n function", () => {
  it("should return 15 for SumToNIterative(5)", () => {
    expect(SumToNIterative(5)).toBe(15);
  });
  it("should return 15 for SumToNMathematical(5)", () => {
    expect(SumToNMathematical(5)).toBe(15);
  });
});
