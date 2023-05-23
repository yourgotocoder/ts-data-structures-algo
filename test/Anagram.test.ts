import { ValidAnagram } from "../src/Algorithms/Programming Patterns/Counters/ValidAnagram"

describe("should check if the second word is an anagram of the first word", () => {
  it("ValidAnagram('cat', 'car') should be false", () => {
    expect(ValidAnagram('cat', 'car')).toBe(false)
  })
  it("ValidAnagram('', '') should be true", () => {
    expect(ValidAnagram('', '')).toBe(true)
  })
  it("ValidAnagram('anagram', 'nagaram') should be true", () => {
    expect(ValidAnagram('anagram', 'nagaram')).toBe(true)
  })
})
