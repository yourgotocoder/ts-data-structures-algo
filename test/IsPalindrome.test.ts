import { IsPalindrome } from "../src/Algorithms/Programming Patterns/Recursion/IsPalindrome";

describe("should check if a word is a palindrome", () => {
  it("IsPalindrome('awesome') will return false", () => {
    expect(IsPalindrome("awesome")).toBeFalsy();
  });
  it("IsPalindrome('foobar') will return false", () => {
    expect(IsPalindrome("foobar")).toBeFalsy();
  });
  it("IsPalindrome('tacocat') will return true", () => {
    expect(IsPalindrome("tacocat")).toBeTruthy();
  });
});
