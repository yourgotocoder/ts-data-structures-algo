import { StringifyNumbers } from "../src/Algorithms/Programming Patterns/Recursion/StringifyNumbers";

describe("takes an object and converts all values that are numbers into strings", () => {
  it("StringifyNumbers(obj) will return {num: '1', test: [], data: { val: '4', info: { isRight: true, random: '66'}}}", () => {
    let obj = {
      num: 1,
      test: [],
      data: {
        val: 4,
        info: {
          isRight: true,
          random: 66,
        },
      },
    };
    expect(StringifyNumbers(obj)).toStrictEqual({
      num: "1",
      test: [],
      data: {
        val: "4",
        info: {
          isRight: true,
          random: "66",
        },
      },
    });
  });
});
