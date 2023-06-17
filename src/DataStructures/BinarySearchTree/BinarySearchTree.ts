import { Queue } from "../Stacks and Queues/Queue";

class BinarySearchTreeNode<T> {
  value: T;
  left: BinarySearchTreeNode<T> | null = null;
  right: BinarySearchTreeNode<T> | null = null;
  constructor(val: T) {
    this.value = val;
  }
}

export class BinarySearchTree<T> {
  root: BinarySearchTreeNode<T> | null = null;
  size: number = 0;
  constructor() {}

  traverse(parent: BinarySearchTreeNode<T>, val: T): BinarySearchTreeNode<T> {
    if (val > parent.value) {
      if (parent.right !== null) {
        parent = parent.right;
        return this.traverse(parent, val);
      }
    } else {
      if (parent.left !== null) {
        parent = parent.left;
        return this.traverse(parent, val);
      }
    }
    return parent;
  }

  insert(val: T): BinarySearchTreeNode<T> | "Duplicate" {
    const newNode = new BinarySearchTreeNode(val);
    if (!this.root) {
      this.root = newNode;
    }
    if (this.find(val) === "Not Found") {
      const nodeToBeInsertedAt = this.traverse(this.root, val);
      if (val > nodeToBeInsertedAt.value) {
        nodeToBeInsertedAt.right = newNode;
        this.size++;
      }
      if (val < nodeToBeInsertedAt.value) {
        nodeToBeInsertedAt.left = newNode;
        this.size++;
      }
      return newNode;
    } else {
      return "Duplicate";
    }
  }

  find(
    val: T,
    parent: BinarySearchTreeNode<T> | null = this.root
  ): BinarySearchTreeNode<T> | "Not Found" {
    if (!parent) return "Not Found";
    if (val === parent.value) return parent;
    if (val < parent.value && !parent.left) return "Not Found";
    if (val > parent.value && !parent.right) return "Not Found";

    if (val < parent.value && parent.left) {
      parent = parent.left;
      return this.find(val, parent);
    }
    if (val > parent.value && parent.right) {
      parent = parent.right;
      return this.find(val, parent);
    }
    return "Not Found";
  }

  BFS(): T[] {
    const store: T[] = [];
    const queue: Queue<BinarySearchTreeNode<T>> = new Queue();
    if (this.root) queue.add(this.root);
    while (queue.size > 0) {
      const visited = queue.remove() as BinarySearchTreeNode<T>;
      if (visited instanceof BinarySearchTreeNode && visited.left) {
        queue.add(visited.left);
      }
      if (visited instanceof BinarySearchTreeNode && visited.right) {
        queue.add(visited.right);
      }
      store.push(visited.value);
    }
    return store;
  }
}
const bst = new BinarySearchTree<number>();
const values: number[] = [];

for (let i = 0; i < 100000; i++) {
  const randomNumber = Math.floor(Math.random() * 30);
  bst.insert(randomNumber);
  !values.includes(randomNumber) && values.push(randomNumber);
}
console.log(values);
console.log(bst.BFS());
