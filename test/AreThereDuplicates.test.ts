import { AreThereDuplicates } from "../src/Algorithms/Programming Patterns/Counters/AreThereDuplicaes";

describe("should check if there are duplicates amongst the arguments passed to a function", () => {
  it("AreThereDuplicates(1, 2, 3) will be false", () => {
    expect(AreThereDuplicates(1, 2, 3)).toBeFalsy();
  });
  it("AreThereDuplicates(1, 2, 2) will be true", () => {
    expect(AreThereDuplicates(1, 2, 2)).toBeTruthy();
  });
  it("AreThereDuplicates('a', 'b', 'a', 'b') will be true", () => {
    expect(AreThereDuplicates("a", "b", "a", "b")).toBeTruthy();
  });
});
