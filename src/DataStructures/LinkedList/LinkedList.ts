class ListNode<T> {
  next: ListNode<T> | null = null;
  value: T;
  constructor(val: T) {
    this.value = val;
  }
}

class LinkedList<T> {
  head: null | ListNode<T>;
  tail: null | ListNode<T>;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val: T): LinkedList<T> {
    const newNode = new ListNode(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else if (this.tail) {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  unshift(val: T): LinkedList<T> {
    const newNode = new ListNode(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else if (this.head) {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  pop(): ListNode<T> | null {
    if (this.length === 0) return null;
    if (this.length === 1) {
      const poppedNode = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return poppedNode;
    }
    let prevNode = this.head;
    while (prevNode) {
      if (prevNode.next === this.tail) {
        const lastNode = this.tail;
        prevNode.next = null;
        this.tail === prevNode;
        this.length--;
        return lastNode;
      }
      prevNode = prevNode.next;
    }
    return null;
  }

  shift(): ListNode<T> | null {
    if (!this.head) return null;
    const oldHead = this.head;
    this.head = oldHead.next;
    this.length--;
    return oldHead;
  }

  get(index: number): ListNode<T> | null {
    if (index < 0 || index >= this.length) return null;
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode && (currentNode = currentNode.next);
    }
    return currentNode;
  }

  set(index: number, value: T): ListNode<T> | false {
    let node = this.get(index);

    if (node) {
      node.value = value;
      return node;
    } else {
      return false;
    }
  }

  printList(): void {
    let current = this.head;
    if (current === null) {
      console.log("List empty");
      return;
    }
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

const list = new LinkedList();
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.unshift(1);
list.printList();
console.log(list.get(2));
console.log(list.set(2, 7));
