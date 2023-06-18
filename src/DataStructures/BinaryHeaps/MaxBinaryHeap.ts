class MaxBinaryHeap<T> {
  values: T[] = [];

  constructor() {}

  insert(val: T): MaxBinaryHeap<T> {
    this.values.push(val);
    if (this.values.length > 1) {
      let indexOfValue = this.values.length - 1;
      const getParentIndex = (index: number) => {
        return Math.floor((index - 1) / 2);
      };
      let parentIndex: number = getParentIndex(indexOfValue);
      const swap = (index1: number, index2: number) =>
        ([this.values[index1], this.values[index2]] = [
          this.values[index2],
          this.values[index1],
        ]);
      while (
        this.values[indexOfValue] > this.values[parentIndex] &&
        indexOfValue !== 0
      ) {
        swap(indexOfValue, parentIndex);
        indexOfValue = parentIndex;
        parentIndex = getParentIndex(indexOfValue);
      }
    }
    return this;
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
