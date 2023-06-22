// Algo
// 1. Every time we look to visit a new node, we pick the node with the smallest known distance to visit first
// 2. Once we've moved to the node we're going to visit, we look at each of it's neighbours
// 3. For each neighbouring node, we calculate the distance by summing the total edges that lead to the node
// we're checking from the starting node
// 4. If the new total distance to a node is less than the previous total, we store the new shorter distance for
// that node.
import WeightedGraph from "../../DataStructures/Graphs/WeightedGraph";
import PriorityQueue from "../../DataStructures/PriorityQueue/PriorityQueue";

const graph: WeightedGraph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("B", "E", 3);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

function Dijkstra(
  Graph: WeightedGraph,
  start: string,
  end: string
): [string[], number] {
  const priorityQueue: PriorityQueue<string> = new PriorityQueue();
  /**
   * @property Stores distance from the start for every vertex
   */
  const distances: { [key: string]: number } = {};
  const previous: { [key: string]: string | null } = {};
  const path: string[] = [];
  for (let key in Graph.adjacencyList) {
    key === start ? (distances[key] = 0) : (distances[key] = Infinity);
    key === start
      ? priorityQueue.enqueue(key, 0)
      : priorityQueue.enqueue(key, Infinity);
    previous[key] = null;
  }

  while (priorityQueue.values.length) {
    let smallestVertex = priorityQueue.dequeue() as string;
    if (smallestVertex === end) {
      while (previous[smallestVertex]) {
        path.push(smallestVertex);
        smallestVertex = previous[smallestVertex]!;
      }
      break;
    }
    if (smallestVertex) {
      for (let neighbour in Graph.adjacencyList[smallestVertex]) {
        let nextNode = Graph.adjacencyList[smallestVertex][neighbour];
        let candidate = distances[smallestVertex] + nextNode.weight;
        let nextNeighbour = nextNode.node;
        if (candidate < distances[nextNeighbour]) {
          distances[nextNeighbour] = candidate;
          previous[nextNeighbour] = smallestVertex;
          priorityQueue.enqueue(nextNeighbour, candidate);
        }
      }
    }
  }
  return [[...path, start].reverse(), distances[end]];
}

console.log(Dijkstra(graph, "A", "B"));
