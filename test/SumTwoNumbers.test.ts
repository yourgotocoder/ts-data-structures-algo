import { addTwoNumbers } from "../src/Algorithms/Basic Problems/SumOfTwoNumbers";

describe("Add two numbers", () => {
  it("should return 5 for addTwoNumbers(2, 3)", () => {
    expect(addTwoNumbers(2, 3)).toBe(5);
  });
  it("should return 15 for addTwoNumbers(12, 3)", () => {
    expect(addTwoNumbers(2, 3)).toBe(15);
  });
});
