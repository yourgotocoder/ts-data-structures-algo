type WeightedVertice = {
  node: string;
  weight: number;
};
export default class WeightedGraph {
  adjacencyList: { [key: string]: WeightedVertice[] } = {};

  addVertex(vertex: string): void {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(v1: string, v2: string, weight: number): void {
    const firstVertex = this.adjacencyList[v1];
    const secondVertex = this.adjacencyList[v2];
    if (firstVertex && secondVertex) {
      !firstVertex.find((vertex) => vertex.node === v2) &&
        firstVertex.push({ node: v2, weight });
      !secondVertex.find((vertex) => vertex.node === v1) &&
        secondVertex.push({ node: v1, weight });
    }
  }
}
