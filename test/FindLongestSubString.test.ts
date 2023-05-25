import { FindLongestSubString } from "../src/Algorithms/Programming Patterns/Sliding Window/FindLongestSubString";

describe("should accept a string and return the length of the longest substring with all distinct characters", () => {
  it("FindLongestSubString('') will be 0", () => {
    expect(FindLongestSubString("")).toBe(0);
  });
  it("FindLongestSubString('rithmschool') will be 7", () => {
    expect(FindLongestSubString("rithmschool")).toBe(7);
  });
  it("FindLongestSubString('bbbbbbb') will be 1", () => {
    expect(FindLongestSubString("bbbbbbb")).toBe(1);
  });
  it("FindLongestSubstring('longestsubstring') will be 8", () => {
    expect(FindLongestSubString("longestsubstring")).toBe(8);
  });
  it("FindLongestSubstring('thecatinthehat') will be 7", () => {
    expect(FindLongestSubString("thecatinthehat")).toBe(7);
  });
  it("FindLongestSubstring('t') will be 1", () => {
    expect(FindLongestSubString("t")).toBe(1);
  });
});
