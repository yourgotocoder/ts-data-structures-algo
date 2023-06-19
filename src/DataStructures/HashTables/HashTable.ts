class HashTable<T> {
  store: T[];
  size: number;
  constructor(size: number) {
    this.store = new Array<T>(size);
    this.size = size;
  }

  hash(key: string): number {
    let total = 0;
    for (let char of key) {
      total = (total + (char.charCodeAt(0) - 96)) % this.size;
    }
    return total;
  }
  add(key: string, value: T): void {
    this.store[this.hash(key)] = value;
  }
  get(key: string): T {
    return this.store[this.hash(key)];
  }
}

const table = new HashTable(100);

table.add("key", 1);

console.log(table.get("key"));
