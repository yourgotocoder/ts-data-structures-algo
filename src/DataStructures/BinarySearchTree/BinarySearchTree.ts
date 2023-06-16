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
        this.traverse(parent, val);
      }
    } else {
      if (parent.left !== null) {
        parent = parent.left;
        this.traverse(parent, val);
      }
    }
    return parent;
  }

  insert(val: T): BinarySearchTreeNode<T> {
    const newNode = new BinarySearchTreeNode(val);
    if (!this.root) {
      this.root = newNode;
    }
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
  }

  find(val: T): BinarySearchTreeNode<T> | "Not Found" {
    if (!this.root) return "Not Found";
    let current = this.root;
    while (true) {
      if (val === current.value) {
        return current;
      } else {
        if (val < current.value) {
          if (current.left) {
            current = current.left;
          } else {
            return "Not Found";
          }
        }
        if (val > current.value) {
          if (current.right) {
            current = current.right;
          } else {
            return "Not Found";
          }
        }
      }
    }
  }
}

const tree = new BinarySearchTree();
tree.insert(15);
tree.insert(9);
tree.insert(21);
tree.insert(12);
tree.insert(8);
tree.insert(15);
console.log(tree.find(8));
console.log(tree.find(10));
console.log(tree);
