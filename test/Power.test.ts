import { Power } from "../src/Algorithms/Programming Patterns/Recursion/Power";

describe("should return the value of a number raised to a certain power(on positive integers)", () => {
  it("will return 9 for Power(3, 2)", () => {
    expect(Power(3, 2)).toBe(9);
  });
  it("will return 27 for Power(3, 3)", () => {
    expect(Power(3, 3)).toBe(27);
  });
});
