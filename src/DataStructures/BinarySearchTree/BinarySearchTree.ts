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
