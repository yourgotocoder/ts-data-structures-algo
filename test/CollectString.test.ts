import { CollectStrings } from "../src/Algorithms/Programming Patterns/Recursion/CollectStrings";

describe("should accept an object and return an array of strings from all values in the objects that are of type string", () => {
  it("CollectStrings(obj) will return ['foo', 'bar', 'baz']", () => {
    const obj = {
      stuff: "foo",
      data: {
        val: {
          thing: {
            info: "bar",
            moreInfo: {
              evenMoreInfo: {
                weMadeIt: "baz",
              },
            },
          },
        },
      },
    };
    expect(CollectStrings(obj)).toStrictEqual(["foo", "bar", "baz"]);
  });
});
