import { BubbleSort } from "../src/Sorting/BubbleSort";

describe("takes an array of number and sorts it in the ascending order", () => {
  it("BubbleSort([8, 9, 2, 1, 5]) will return [1, 2, 5, 8, 9]", () => {
    expect(BubbleSort([8, 9, 2, 1, 5])).toStrictEqual([1, 2, 5, 8, 9]);
  });
});
