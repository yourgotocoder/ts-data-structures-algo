class HashTable<T> {
  store: [string, T][][];
  size: number;
  constructor(size: number) {
    this.store = new Array<[string, T][]>(size);
    this.size = size;
  }

  hash(key: string): number {
    let hashIndex = 0;
    const prime = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      hashIndex = (hashIndex * prime + (char.charCodeAt(0) - 96)) % this.size;
    }
    return hashIndex;
  }
  set(key: string, value: T): void {
    if (!this.store[this.hash(key)]) this.store[this.hash(key)] = [];
    let innerStore = this.store[this.hash(key)];
    if (this.get(key)) {
      const indexOfInnerStore = innerStore.findIndex((item) => item[0] === key);
      innerStore[indexOfInnerStore][1] = value;
    } else {
      innerStore.push([key, value]);
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

  keys(): string[] {
    const keys: string[] = [];
    for (let innerStore of this.store) {
      if (innerStore) {
        for (let item of innerStore) {
          keys.push(item[0]);
        }
      }
    }
    return keys;
  }

  values(): T[] {
    const values: T[] = [];
    for (let innerStore of this.store) {
      if (innerStore) {
        for (let item of innerStore) {
          values.push(item[1]);
        }
      }
    }
    return values;
  }
}

const table = new HashTable(100);

table.set("key", 1);
table.set("zion", "zie");
console.log(table.get("key"));

console.log(table.get("zion"));
console.log(table.get("false"));
console.log(table.keys());
console.log(table.values());
