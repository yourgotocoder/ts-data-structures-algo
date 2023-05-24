import { IsSubsequence } from "../src/Algorithms/Programming Patterns/Multiple Pointers/IsSubsequence";

describe("should take two strings and check if the first string is a substring in the second string without the order being changed", () => {
  it("IsSubsequence('hello', 'hello world') will return true", () => {
    expect(IsSubsequence("hello", "hello world")).toBeTruthy();
  });
  it("IsSubsequence('sing', 'sting') will return true", () => {
    expect(IsSubsequence("sing", "sting")).toBeTruthy();
  });
  it("IsSubsequence('abc', 'abracadabra') will return true", () => {
    expect(IsSubsequence("abc", "abracadabra")).toBeTruthy();
  });
  it("IsSubsequence('abc', 'acb') will return false. Sequenec matters", () => {
    expect(IsSubsequence("abc", "acb")).toBeFalsy();
  });
});
