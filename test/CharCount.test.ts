import { CharCount } from "../src/Algorithms/Basic Problems/CharCount";

describe("Count the number of times a character is repeated", () => {
  it("should return an object { a: 2, b: 1} for CharCount('aa b')", () => {
    expect(CharCount("aa b")).toStrictEqual({ a: 2, b: 1 });
  });
  it("should return an object { a: 2, b: 1, 1: 1, 2: 1, 3: 1 } for CharCount('aa b 123')", () => {
    expect(CharCount("aa b 123")).toStrictEqual({
      a: 2,
      b: 1,
      1: 1,
      2: 1,
      3: 1,
    });
  });
});
