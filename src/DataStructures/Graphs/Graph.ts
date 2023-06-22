import { Queue } from "../Stacks and Queues/Queue";
import { Stack } from "../Stacks and Queues/Stack";

interface VertexList {
  [key: string]: string[];
}
class Graph {
  adjacencyList: VertexList = {};

  constructor() {}

  addVertex(val: string) {
    if (!this.adjacencyList[val]) this.adjacencyList[val] = [];
  }

  addEdge(v1: string, v2: string): boolean {
    const vertex1 = this.adjacencyList[v1];
    const vertex2 = this.adjacencyList[v2];
    if (vertex1 && vertex2) {
      !vertex1.includes(v2) && vertex1.push(v2);
      !vertex2.includes(v1) && vertex2.push(v1);
      return true;
    }
    return false;
  }

  removeEdge(v1: string, v2: string) {
    const vertex1 = this.adjacencyList[v1];
    const vertex2 = this.adjacencyList[v2];
    if (vertex1 && vertex2) {
      this.adjacencyList[v1] = vertex1.filter((v: string) => v !== v2);
      this.adjacencyList[v2] = vertex2.filter((v: string) => v !== v1);
    }
  }

  removeVertex(v: string) {
    if (this.adjacencyList[v]) {
      for (let connectedVertex of this.adjacencyList[v]) {
        this.removeEdge(v, connectedVertex);
      }
    }
    delete this.adjacencyList[v];
  }

  DFRecursive(v: string): string[] {
    const result: string[] = [];
    const visited: { [key: string]: boolean } = {};
    const helper = (vertex: string) => {
      if (visited[vertex]) return;
      visited[vertex] = true;
      result.push(vertex);
      for (let neighbour of this.adjacencyList[vertex]) {
        helper(neighbour);
      }
    };
    helper(v);
    return result;
  }
  DFIterative(start: string): string[] {
    const result: string[] = [];
    const visited: { [key: string]: true } = {};
    const stack: string[] = [];
    stack.push(start);
    while (stack.length > 0) {
      let vertex = stack.pop() as string;
      if (!visited[vertex]) {
        result.push(vertex);
        visited[vertex] = true;
        for (let neighbour of this.adjacencyList[vertex]) {
          stack.push(neighbour);
        }
      }
    }
    return result;
  }
  BFTraversal(start: string): string[] {
    const result: string[] = [];
    const visited: { [key: string]: true } = {};
    const queue: Queue<string> = new Queue();
    queue.enqueue(start);
    while (queue.size) {
      const vertex = queue.dequeue();
      if (!visited[vertex]) {
        visited[vertex] = true;
        result.push(vertex);
        this.adjacencyList[vertex].forEach((neighbour) =>
          queue.enqueue(neighbour)
        );
      }
    }
    return result;
  }
}

const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");
// console.log(graph.DFRecursive("A"));
// console.log(graph.DFIterative("A"));
console.log(graph.BFTraversal("A"));
