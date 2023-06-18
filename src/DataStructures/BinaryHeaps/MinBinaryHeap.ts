class MinBinaryHeap<T> {
  values: T[] = [];

  private swap(idx1: number, idx2: number): void {
    [this.values[idx1], this.values[idx2]] = [
      this.values[idx2],
      this.values[idx1],
    ];
  }

  insert(val: T): MinBinaryHeap<T> {
    this.values.push(val);
    if (this.values.length > 1) {
      let currentIndex = this.values.length - 1;
      const getParentIndex = (idx: number): number => {
        return Math.floor((idx - 1) / 2);
      };
      let parentIndex = getParentIndex(currentIndex);
      while (
        this.values[currentIndex] < this.values[parentIndex] &&
        currentIndex !== 0
      ) {
        this.swap(currentIndex, parentIndex);
        currentIndex = parentIndex;
        parentIndex = getParentIndex(currentIndex);
      }
    }
    return this;
  }

  extractMin(): T | null {
    if (this.values.length === 0) return null;
    if (this.values.length === 1) return this.values.pop() as T;
    this.swap(0, this.values.length - 1);
    const minValue: T = this.values.pop() as T;
    let currentIndex: number = 0;
    let leftChildIndex: number = 2 * currentIndex + 1;
    let rightChildIndex: number = 2 * currentIndex + 2;
    while (this.values[leftChildIndex] || this.values[rightChildIndex]) {
      let indexToSwap: number;
      if (this.values[leftChildIndex] && this.values[rightChildIndex]) {
        this.values[leftChildIndex] > this.values[rightChildIndex]
          ? (indexToSwap = rightChildIndex)
          : (indexToSwap = leftChildIndex);
      } else if (!this.values[leftChildIndex]) {
        indexToSwap = rightChildIndex;
      } else {
        indexToSwap = leftChildIndex;
      }
      if (this.values[currentIndex] > this.values[indexToSwap]) {
        this.swap(currentIndex, indexToSwap);
        currentIndex = indexToSwap;
        leftChildIndex = 2 * currentIndex + 1;
        rightChildIndex = 2 * currentIndex + 2;
      } else {
        break;
      }
    }
    return minValue;
  }
}

const heap = new MinBinaryHeap<number>();
heap.insert(10);
heap.insert(9);
heap.insert(11);
heap.insert(5);
heap.insert(1);
heap.insert(2);
heap.insert(3);
console.log(heap.values);
console.log(heap.extractMin());
console.log(heap.extractMin());
console.log(heap.extractMin());
console.log(heap.extractMin());
console.log(heap.extractMin());
console.log(heap.extractMin());
console.log(heap.extractMin());
console.log(heap.extractMin());
