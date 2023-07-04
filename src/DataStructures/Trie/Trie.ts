class TrieNode {
  children: { [key: string]: TrieNode };
  isEndOfWord: boolean;

  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}
export class Trie {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }
}
