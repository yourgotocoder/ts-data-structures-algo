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
  const distances: { [key: string]: number } = {};
  const previous: { [key: string]: string | null } = {};

  for (let key in Graph.adjacencyList) {
    key === start ? (distances[key] = 0) : (distances[key] = Infinity);
    key === start
      ? priorityQueue.enqueue(key, 0)
      : priorityQueue.enqueue(key, Infinity);
    previous[key] = null;
  }

  console.log(priorityQueue.values);
  while (priorityQueue.values.length) {
    const smallestVertex = priorityQueue.dequeue() as string;
    if (smallestVertex === end) {
      break;
    }
    if (smallestVertex || distances[smallestVertex] !== Infinity) {
      for (let neighbour in Graph.adjacencyList[smallestVertex]) {
        console.log(neighbour);
      }
    }
  }
  return [[], 0];
}

Dijkstra(graph, "A", "B");
