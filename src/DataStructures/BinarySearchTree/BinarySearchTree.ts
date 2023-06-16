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

  constructor() {}

  traverse(root: BinarySearchTreeNode<T>, val: T): BinarySearchTreeNode<T> {
    if (val > root.value) {
      if (root.right !== null) {
        root = root.right;
        this.traverse(root, val);
      }
    } else {
      if (root.left !== null) {
        root = root.left;
        this.traverse(root, val);
      }
    }
    return root;
  }

  insert(val: T): BinarySearchTreeNode<T> {
    const newNode = new BinarySearchTreeNode(val);
    if (!this.root) {
      this.root = newNode;
    }
    const nodeToBeInsertedAt = this.traverse(this.root, val);
    if (val > nodeToBeInsertedAt.value) nodeToBeInsertedAt.right = newNode;
    if (val < nodeToBeInsertedAt.value) nodeToBeInsertedAt.left = newNode;
    return newNode;
  }
}

const tree = new BinarySearchTree();
tree.insert(15);
tree.insert(9);
tree.insert(21);
tree.insert(12);
tree.insert(8);
console.log(tree);
