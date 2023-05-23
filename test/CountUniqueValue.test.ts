import { CountUniqueValue } from "../src/Algorithms/Programming Patterns/Multiple Pointers/CountUniqueValues";

describe("should return the number of unique values", () => {
  it("CountUniqueValue([1, 1, 1, 1, 2]) will return 2", () => {
    expect(CountUniqueValue([1, 1, 1, 1, 2])).toEqual(2);
  });
  it("CountUniqueValue([]) will return 0", () => {
    expect(CountUniqueValue([])).toEqual(0);
  });
  it("CountUniqueValue([-2, -1, 0, 1, 1]) will return 4", () => {
    expect(CountUniqueValue([-2, -1, 0, 1, 1])).toEqual(4);
  });
});
