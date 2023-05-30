import { InsertionSort } from "../src/Sorting/InsertionSort";

describe("takes an array of number and sorts it in the ascending order", () => {
  it("InsertionSort([8, 9, 2, 1, 5]) will return [1, 2, 5, 8, 9]", () => {
    expect(InsertionSort([2, 1, 5, 8, 9])).toStrictEqual([1, 2, 5, 8, 9]);
  });
});
