import { Countdown } from "../src/Algorithms/Programming Patterns/Recursion/Countdown";

describe("should take a positive interger and return an array that starts from the integer and goes down to 1", () => {
  it("Countdown(5) will return [5, 4, 3, 2, 1]", () => {
    expect(Countdown(5)).toStrictEqual([5, 4, 3, 2, 1]);
  });
  it("Countdown(0) will return []", () => {
    expect(Countdown(0)).toStrictEqual([]);
  });
});
