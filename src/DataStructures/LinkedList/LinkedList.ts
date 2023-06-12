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

  push(val: T): boolean {
    const newNode = new ListNode(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      const prevNode = this.tail;
      this.tail = newNode;
      if (prevNode) prevNode.next = newNode;
    }
    this.length++;
    return true;
  }

  printList(): void {
    let current = this.head;
    if (current === null) {
      console.log("List empty");
      return;
    }
    do {
      console.log(current.value);
      current = current.next;
    } while (current);
  }
}

const list = new LinkedList();
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.printList();
