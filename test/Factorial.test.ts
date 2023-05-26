import { Factorial } from "../src/Algorithms/Programming Patterns/Recursion/Factorial";

describe("should return the factorial of a number", () => {
  it("Factorial(5) will return 120", () => {
    expect(Factorial(5)).toBe(120);
  });
  it("Factorial(0) will return 1", () => {
    expect(Factorial(0)).toBe(1);
  });
  it("Factorial(10) will return 3628800", () => {
    expect(Factorial(10)).toBe(3628800);
  });
});
