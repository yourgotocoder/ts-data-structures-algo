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

  constructor() { }

  push(val: T): DoublyLinkedNode<T> {
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
    return newNode;
  }

  pop(): DoublyLinkedNode<T> | null {
    if (!this.head) return null;
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
newList.pop();
newList.printList();
