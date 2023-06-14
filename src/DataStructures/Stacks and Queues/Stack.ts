class ArrayStack<T> {
  stack: T[] = [];
  length = this.stack.length;
  constructor() {}

  add(val: T) {
    this.stack.push(val);
  }
  pop(): T | undefined {
    return this.stack.pop();
  }
}
