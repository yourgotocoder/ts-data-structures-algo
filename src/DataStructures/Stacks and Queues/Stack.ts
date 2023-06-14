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

export class Stack<T> {
  tail: StackNode<T> | null = null;
  size: number = 0;

  add(val: T): number {
    const node = new StackNode(val);
    if (!this.tail) {
      this.tail = node;
    } else {
      node.previous = this.tail;
      this.tail = node;
    }
    this.size++;
    return this.size;
  }

  remove(): StackNode<T> | "Empty Stack" {
    if (!this.tail) return "Empty Stack";
    const removedNode = this.tail;
    this.tail = removedNode.previous;
    removedNode.previous = null;
    this.size--;
    return removedNode;
  }

  printStack(): void {
    if (!this.tail) console.log("Empty stack");
    while (this.tail) {
      console.log(this.tail.value);
      this.tail = this.tail.previous;
    }
  }
}

const stack = new Stack();
// 1 <- 2 <- 3 <- 4 <- 5
//                        tail
stack.add(1);
stack.add(2);
stack.add(3);
stack.add(4);
stack.add(5);
stack.remove();
stack.remove();
stack.remove();
stack.remove();
// 1 <- 2 <- 3 <- 4
stack.printStack();
//               tail
