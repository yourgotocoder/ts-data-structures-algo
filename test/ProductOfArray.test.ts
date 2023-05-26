import { ProductOfArray } from "../src/Algorithms/Programming Patterns/Recursion/ProductOfArray";

describe("should return the product of numbers stored in an array", () => {
  it("ProductOfArray([1, 2, 3]) will return 6", () => {
    expect(ProductOfArray([1, 2, 3])).toBe(6);
  });
  it("ProductOfArray([1, 2, 0]) will return 0", () => {
    expect(ProductOfArray([1, 2, 0])).toBe(0);
  });
  it("ProductOfArray([1, 2, 5, 10, 8]) will return 800", () => {
    expect(ProductOfArray([1, 2, 5, 10, 8])).toBe(800);
  });
});
