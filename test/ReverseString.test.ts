import { ReverseString } from "../src/Algorithms/Programming Patterns/Recursion/ReverseString";

describe("should return the reverse of a string", () => {
  it("ReverseString('awesome') will return emosewa", () => {
    expect(ReverseString("awesome")).toBe("emosewa");
  });
  it("ReverseString('rithmschool') will return loohcsmhtir", () => {
    expect(ReverseString("rithmschool")).toBe("loohcsmhtir");
  });
});
