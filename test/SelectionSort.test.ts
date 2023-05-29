import { SelectionSort } from "../src/Sorting/SelectionSort";

describe("takes an array of number and sorts it in the ascending order", () => {
  it("SelectionSort([8, 9, 2, 1, 5]) will return [1, 2, 5, 8, 9]", () => {
    expect(SelectionSort([2, 1, 5, 8, 9])).toStrictEqual([1, 2, 5, 8, 9]);
  });
});
