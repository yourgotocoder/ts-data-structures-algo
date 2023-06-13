class DoublyLinkedNode<T> {
  value: T;
  previous: DoublyLinkedNode<T> | null = null;
  next: DoublyLinkedNode<T> | null = null;
  constructor(val: T) {
    this.value = val;
  }
}

export class DoublyLinkedList<T> {
  length: number = 0;
  head: DoublyLinkedNode<T> | null = null;
  tail: DoublyLinkedNode<T> | null = null;

  constructor() {}

  push(val: T): DoublyLinkedList<T> {
    const newNode = new DoublyLinkedNode(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail && (this.tail.next = newNode);
      newNode.previous = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop(): DoublyLinkedNode<T> | null {
    if (this.length === 0) return null;
    const poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      poppedNode && poppedNode.previous && (this.tail = poppedNode.previous);
      this.tail && (this.tail.next = null);
      poppedNode && (poppedNode.previous = null);
    }
    this.length--;
    return poppedNode;
  }

  shift(): DoublyLinkedNode<T> | null {
    if (this.length === 0) return null;
    const oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      oldHead && (this.head = oldHead.next);
      this.head && (this.head.previous = null);
      oldHead && (oldHead.next = null);
    }
    this.length--;
    return oldHead;
  }

  unshift(value: T): DoublyLinkedList<T> {
    const newNode = new DoublyLinkedNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.previous = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index: number): DoublyLinkedNode<T> | null {
    if (index < 0 || index >= this.length) return null;
    let mid = Math.floor(this.length / 2);
    if (index <= mid) {
      let node = this.head;
      for (let nodeIndex = 0; nodeIndex < index; nodeIndex++) {
        node && (node = node.next);
      }
      return node;
    } else {
      let node = this.tail;
      for (let nodeIndex = this.length - 1; nodeIndex > index; nodeIndex--) {
        node && (node = node.previous);
      }
      return node;
    }
  }

  printList(): void {
    let current = this.head;
    if (!current) console.log("Empty list");
    if (current) {
      while (current) {
        console.log(current.value);
        current = current.next;
      }
    }
  }
}

const newList = new DoublyLinkedList();
newList.push(1);
newList.push(2);
newList.push(3);
newList.push(4);
console.log(newList.get(0));
console.log(newList.get(4));
console.log(newList.get(3));
newList.printList();
