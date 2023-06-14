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

class StackNode<T> {
  previous: StackNode<T> | null = null;
  value: T;
  constructor(val: T) {
    this.value = val;
  }
}

class Stack<T> {
  tail: StackNode<T> | null = null;

  add(val: T): void {
    const node = new StackNode(val);
    if (!this.tail) {
      this.tail = node;
    } else {
      node.previous = this.tail;
      this.tail = node;
    }
  }

  remove(): void {
    if (!this.tail) return;
    const removedNode = this.tail;
    this.tail = removedNode.previous;
    removedNode.previous = null;
  }

  printStack(): void {
    while (this.tail) {
      console.log(this.tail.value);
      this.tail = this.tail.previous;
    }
  }
}

const stack = new Stack();

stack.add(1);
stack.add(2);
stack.add(3);
stack.add(4);
stack.add(5);
stack.remove();
stack.printStack();
