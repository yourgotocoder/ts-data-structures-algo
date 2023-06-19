class HashTable<T> {
  store: [string, T][][];
  size: number;
  constructor(size: number) {
    this.store = new Array<[string, T][]>(size);
    this.size = size;
  }

  hash(key: string): number {
    let total = 0;
    const prime = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      total = (total * prime + (char.charCodeAt(0) - 96)) % this.size;
    }
    return total;
  }
  set(key: string, value: T): void {
    if (!this.store[this.hash(key)]) this.store[this.hash(key)] = [];
    if (this.get(key)) {
      const indexOfInnerStore = this.store[this.hash(key)].findIndex(
        (item) => item[0] === key
      );
      this.store[this.hash(key)][indexOfInnerStore][1] = value;
    } else {
      this.store[this.hash(key)].push([key, value]);
    }
  }
  get(key: string): [string, T] | null {
    if (this.store[this.hash(key)]) {
      const innerStore = this.store[this.hash(key)];
      for (let item of innerStore) {
        if (item[0] === key) return item;
      }
      return null;
    } else {
      return null;
    }
  }
}

const table = new HashTable(100);

table.set("key", 1);
table.set("zion", "zie");
table.set("zion", "na");
console.log(table.get("key"));

console.log(table.get("zion"));
console.log(table.get("false"));
