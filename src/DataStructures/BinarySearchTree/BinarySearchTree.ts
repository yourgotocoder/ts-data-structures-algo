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
  constructor() { }

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
    if (this.root) queue.enqueue(this.root);
    while (queue.size > 0) {
      const visited = queue.dequeue() as BinarySearchTreeNode<T>;
      if (visited.left) {
        queue.enqueue(visited.left);
      }
      if (visited.right) {
        queue.enqueue(visited.right);
      }
      store.push(visited.value);
    }
    return store;
  }

  DFSPreOrder(): T[] {
    const store: T[] = [];
    const current: BinarySearchTreeNode<T> | null = this.root;
    const helper = (node: BinarySearchTreeNode<T> | null) => {
      if (!node) return;
      store.push(node.value);
      if (node.left) {
        helper(node.left);
      }
      if (node.right) {
        helper(node.right);
      }
    };
    helper(current);
    return store;
  }

  DFSPostOrder(): T[] {
    const store: T[] = [];
    const current: BinarySearchTreeNode<T> | null = this.root;
    const helper = (node: BinarySearchTreeNode<T>) => {
      if (node.left) helper(node.left);
      if (node.right) helper(node.right);
      store.push(node.value);
    };
    helper(current as BinarySearchTreeNode<T>);
    return store;
  }
  DFSInOrder(): T[] {
    const store: T[] = [];
    const current: BinarySearchTreeNode<T> | null = this.root;
    const helper = (node: BinarySearchTreeNode<T>) => {
      if (node.left) helper(node.left);
      store.push(node.value);
      if (node.right) helper(node.right);
    };
    helper(current as BinarySearchTreeNode<T>);
    return store;
  }
}
const bst = new BinarySearchTree<number>();
bst.insert(10);
bst.insert(6);
bst.insert(15);
bst.insert(3);
bst.insert(8);
bst.insert(20);
console.log(bst.find(14));
//        10
//    6           15
//  3   8              20
// console.log(bst.BFS());
console.log(bst.DFSPreOrder());
console.log(bst.DFSPostOrder());
console.log(bst.DFSInOrder());
