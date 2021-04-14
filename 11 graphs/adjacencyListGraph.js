class Graph {
  constructor() {
    this.numberOfNodes = 0;
    this.adjancentList = {};
  }

  addVertex(node) {
    let key = node.toString();
    if (key in this.adjancentList)
      throw 'Vertex already exist';

    this.adjancentList[key] = [];

    this.numberOfNodes++;
  }

  addEdge(node1, node2) {
    let sourceKey = node1.toString();
    let targetKey = node2.toString();

    if (false == sourceKey in this.adjancentList)
      this.addVertex(sourceKey);
    if (false == targetKey in this.adjancentList)
      this.addVertex(targetKey);

    let sourceNode = this.adjancentList[sourceKey];
    if (false == targetKey in sourceNode)
      sourceNode.push(targetKey);

    let targetNode = this.adjancentList[targetKey];
    if (false == sourceKey in targetNode)
      targetNode.push(sourceKey);

    console.log(this.adjancentList);
  }

  showConnections() {
    for (let node in this.adjancentList) {
      console.log(`${node}-->` + this.adjancentList[node].join(' '));
    }
  }
}

let graph = new Graph();
graph.addVertex(1);
graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.showConnections();