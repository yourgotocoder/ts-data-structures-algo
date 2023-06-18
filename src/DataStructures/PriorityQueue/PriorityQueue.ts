class PriorityQueueNode<T> {
  value: T;
  priority: number;
  constructor(val: T, priority: number) {
    this.value = val;
    this.priority = priority;
  }
}
export default class PriorityQueue<T> {
  values: PriorityQueueNode<T>[] = [];

  enqueue(value: T, priority: number): PriorityQueue<T> {
    this.values.push(new PriorityQueueNode(value, priority));
    if (this.values.length > 1) {
      let indexOfNode = this.values.length - 1;
      const getParentIndex = (index: number): number => {
        return Math.floor((index - 1) / 2);
      };
      let parentIndex: number = getParentIndex(indexOfNode);
      while (
        indexOfNode !== 0 &&
        this.values[indexOfNode].priority < this.values[parentIndex].priority
      ) {
        [this.values[indexOfNode], this.values[parentIndex]] = [
          this.values[parentIndex],
          this.values[indexOfNode],
        ];
        indexOfNode = parentIndex;
        parentIndex = getParentIndex(indexOfNode);
      }
    }
    return this;
  }

  dequeue(): T | null {
    if (this.values.length === 0) return null;
    if (this.values.length === 1) return this.values.pop()?.value as T;
    [this.values[0], this.values[this.values.length - 1]] = [
      this.values[this.values.length - 1],
      this.values[0],
    ];
    const minValue = this.values.pop()?.value as T;
    let currentIndex: number = 0;
    let leftNodeIndex = 2 * currentIndex + 1;
    let rightNodeIndex = 2 * currentIndex + 2;
    while (this.values[leftNodeIndex] || this.values[rightNodeIndex]) {
      let leftPriority =
        this.values[leftNodeIndex] && this.values[leftNodeIndex].priority;
      let rightPriority =
        this.values[rightNodeIndex] && this.values[rightNodeIndex].priority;
      let indexToBeSwapped: number;
      if (leftPriority && rightPriority) {
        leftPriority > rightPriority
          ? (indexToBeSwapped = rightPriority)
          : (indexToBeSwapped = leftPriority);
      } else if (!leftPriority) {
        indexToBeSwapped = rightNodeIndex;
      } else {
        indexToBeSwapped = leftNodeIndex;
      }
      if (
        indexToBeSwapped &&
        this.values[currentIndex].priority >
          this.values[indexToBeSwapped].priority
      ) {
        [this.values[currentIndex], this.values[indexToBeSwapped]] = [
          this.values[indexToBeSwapped],
          this.values[currentIndex],
        ];
        currentIndex = indexToBeSwapped;
        leftNodeIndex = 2 * currentIndex + 1;
        rightNodeIndex = 2 * currentIndex + 2;
      } else {
        break;
      }
    }
    return minValue;
  }
}

const priorityQueue = new PriorityQueue();
priorityQueue.enqueue("headache", 2);
priorityQueue.enqueue("fracture", 1);
priorityQueue.enqueue("fever", 3);
priorityQueue.enqueue("stabbed", 0);
console.log(priorityQueue.values);
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
