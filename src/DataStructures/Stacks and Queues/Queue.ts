class ArrayQueue<T> {
  queue: T[] = [];
  size: number = this.queue.length;

  add(value: T): ArrayQueue<T> {
    this.queue.push(value);
    this.size++;
    return this;
  }

  remove(): T | undefined {
    this.size--;
    return this.queue.shift();
  }
}

class QueueNode<T> {
  value: T;
  next: QueueNode<T> | null = null;

  constructor(val: T) {
    this.value = val;
  }
}

class Queue<T> {
  first: QueueNode<T> | null = null;
  last: QueueNode<T> | null = null;
  size: number = 0;

  add(value: T): Queue<T> {
    const node = new QueueNode(value);
    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      this.last && (this.last.next = node);
      this.last = node;
    }
    this.size++;
    return this;
  }

  remove(): QueueNode<T> | "Empty Stack" {
    if (!this.first) return "Empty Stack";
    const removedNode = this.first;
    this.first = this.first.next;
    removedNode.next = null;
    this.size--;
    return removedNode;
  }

  printQueue(): void {
    if (!this.first) console.log("Empty queue");
    while (this.first) {
      console.log(this.first.value);
      this.first = this.first.next;
    }
  }
}

const queue = new Queue();
queue.add(1);
queue.add(2);
queue.add(3);
queue.add(4);
queue.add(5);
queue.remove();
queue.remove();
queue.remove();
queue.remove();
queue.remove();
queue.printQueue();
