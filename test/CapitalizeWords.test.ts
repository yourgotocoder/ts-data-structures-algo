import { CapitalizeWords } from "../src/Algorithms/Programming Patterns/Recursion/CapitalizeWords";

describe("should describe every word in an array", () => {
  it("CapitalizeWords(words) will return ['I', 'AM', 'LEARNING', 'RECURSION']", () => {
    let words = ["i", "am", "learning", "recursion"];
    expect(CapitalizeWords(words)).toStrictEqual([
      "I",
      "AM",
      "LEARNING",
      "RECURSION",
    ]);
  });
});
