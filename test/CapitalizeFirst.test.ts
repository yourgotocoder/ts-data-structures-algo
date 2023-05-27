import { CapitalizeFirst } from "../src/Algorithms/Programming Patterns/Recursion/CapitalizeFirst";

describe("capitalize the first letter of every word in an array", () => {
  it("CapitalizeFirst(['car', 'taco', 'banana']) will return ['Car', 'Taco', 'Banana']", () => {
    expect(CapitalizeFirst(["car", "taco", "banana"])).toStrictEqual([
      "Car",
      "Taco",
      "Banana",
    ]);
  });
  it("CapitalizeFirst(['car', 't', 'banana']) will return ['Car', 'T', 'Banana']", () => {
    expect(CapitalizeFirst(["car", "t", "banana"])).toStrictEqual([
      "Car",
      "T",
      "Banana",
    ]);
  });
});
