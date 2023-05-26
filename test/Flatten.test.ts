import { Flatten } from "../src/Algorithms/Programming Patterns/Recursion/Flatten";

describe("should turn an n dimension array to a one dimension array", () => {
  it("Flatten([1, 2, 3, 4]) will return [1, 2, 3 , 4]", () => {
    expect(Flatten([1, 2, 3, 4])).toStrictEqual([1, 2, 3, 4]);
  });
  it("Flatten([[1, 2], 3, 4]) will return [1, 2, 3 , 4]", () => {
    expect(Flatten([[1, 2], 3, 4])).toStrictEqual([1, 2, 3, 4]);
  });
  it("Flatten([[1, 2], [3, 4]]) will return [1, 2, 3 , 4]", () => {
    expect(
      Flatten([
        [1, 2],
        [3, 4],
      ])
    ).toStrictEqual([1, 2, 3, 4]);
  });
  it("Flatten([[1, [2]], 3, 4]) will return [1, 2, 3 , 4]", () => {
    expect(Flatten([[1, [2]], 3, 4])).toStrictEqual([1, 2, 3, 4]);
  });
});
