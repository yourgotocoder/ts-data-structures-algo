class MaxBinaryHeap<T> {
  values: T[] = [];

  constructor() {}

  swap(index1: number, index2: number) {
    [this.values[index1], this.values[index2]] = [
      this.values[index2],
      this.values[index1],
    ];
  }

  insert(val: T): MaxBinaryHeap<T> {
    this.values.push(val);
    if (this.values.length > 1) {
      let indexOfVal = this.values.length - 1;
      const getParentIndex = (index: number): number => {
        return Math.floor((index - 1) / 2);
      };
      let parentIndex: number = getParentIndex(indexOfVal);
      while (
        this.values[indexOfVal] > this.values[parentIndex] &&
        indexOfVal !== 0
      ) {
        this.swap(indexOfVal, parentIndex);
        indexOfVal = parentIndex;
        parentIndex = getParentIndex(indexOfVal);
      }
    }
    return this;
  }

  extractMax(): T | null {
    if (this.values.length === 0) return null;
    if (this.values.length === 1) return this.values[0];

    this.swap(0, this.values.length - 1);
    const extractedValue = this.values.pop();
    let currentIndexOfLastElement = 0;
    let child1Index = 2 * currentIndexOfLastElement + 1;
    let child2Index = 2 * currentIndexOfLastElement + 2;
    let indexToSwap: number;
    while (this.values[child1Index] || this.values[child2Index]) {
      if (this.values[child1Index] && this.values[child2Index]) {
        this.values[child1Index] > this.values[child2Index]
          ? (indexToSwap = child1Index)
          : (indexToSwap = child2Index);
      } else if (!this.values[child1Index]) {
        indexToSwap = child2Index;
      } else {
        indexToSwap = child1Index;
      }

      if (this.values[indexToSwap] > this.values[currentIndexOfLastElement]) {
        this.swap(indexToSwap, currentIndexOfLastElement);
        currentIndexOfLastElement = indexToSwap;
        child1Index = 2 * currentIndexOfLastElement + 1;
        child2Index = 2 * currentIndexOfLastElement + 2;
      } else {
        break;
      }
    }
    return extractedValue as T;
  }
}

const maxHeap = new MaxBinaryHeap<number>();
maxHeap.insert(41);
maxHeap.insert(39);
maxHeap.insert(33);
maxHeap.insert(18);
maxHeap.insert(27);
maxHeap.insert(12);
maxHeap.insert(55);
console.log(maxHeap.values);
console.log(maxHeap.extractMax());
console.log(maxHeap.values);
