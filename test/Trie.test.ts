import Trie from "../src/DataStructures/Trie/Trie";

describe("Should test the trie words", () => {
  it("Will insert the word hi and searching for hi should return true", () => {
    const trie = new Trie();
    trie.insert("Hi");
    expect(trie.search("Hi")).toBe(true);
  });
  it("Will insert the word hi and searching for heir should return false", () => {
    const trie = new Trie();
    trie.insert("Heir");
    expect(trie.search("Hi")).toBe(false);
  });
});
