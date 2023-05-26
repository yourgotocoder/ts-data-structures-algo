import { Fibonacci } from "../src/Algorithms/Programming Patterns/Recursion/Fibonacci";

describe("should return the nth value in a Fibonacci sequence", () => {
  it("Fibonacci(0) will return 0", () => {
    expect(Fibonacci(0)).toBe(0);
  });
  it("Fibonacci(1) will return 1", () => {
    expect(Fibonacci(1)).toBe(1);
  });
  it("Fibonacci(2) will return 1", () => {
    expect(Fibonacci(2)).toBe(1);
  });
  it("Fibonacci(5) will return 5", () => {
    expect(Fibonacci(5)).toBe(5);
  });
  it("Fibonacci(10) will return 55", () => {
    expect(Fibonacci(10)).toBe(55);
  });
  it("Fibonacci(30) will return 832040", () => {
    expect(Fibonacci(30)).toBe(832040);
  });
  it("Fibonacci(40) will return 102334155", () => {
    expect(Fibonacci(40)).toBe(102334155);
  });
});
